const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Document = require('../db/Document.js');
const db = require('../db/index.js');
const app = express();
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/mydocapp';
mongoose.Promise = global.Promise;

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));

app.post('/', (req, res) => {
  // mongoose.connect(uri, {
  //   useNewUrlParser: true,
  //   autoIndex: true
  // });


  Document.findOne({category: req.body.category}, {lean: true}, (err, result) => {
    if (err) { console.log('Error at POST', err); }
    else if (!result) {
      Document.create({
        category: req.body.category,
        subjects: [{
          subject: req.body.subject,
          sites: [{
            title: req.body.title,
            url: req.body.url,
            date: req.body.date,
            starred: req.body.starred,
            favorites: req.body.favorites
          }]
        }]
      }, (err, result) => {
        if (err) { console.log('err at new category post', err) }
        else {  Document.find().exec((err, result) => {
          if (err) { console.log('Cannot send back all data from post api, UPDATE'); }
          else { res.send(result); }
        });
        }
      });
    } else {
      Document.find({'subjects.subject': req.body.subject}, (err, result) => {
        if (err) { console.log('Error at repeat subject POST', err); }
        else if (result.length === 0) {
          Document.findOneAndUpdate({category: req.body.category}, {$push: {subjects: {
              subject: req.body.subject,
              sites: [{
                title: req.body.title,
                url: req.body.url,
                date: req.body.date,
                starred: req.body.starred,
                favorites: req.body.favorites
              }]
            }}}, (err, result) => {
            if (err) { console.log('err at new category post', err) }
            else {  Document.find().exec((err, result) => {
              if (err) { console.log('Cannot send back all data from post api, UPDATE'); }
              else { res.send(result); }
            });
            }
          });
        } else {
          Document.update({category: req.body.category, 'subjects.subject': req.body.subject}, {$push: {'subjects.$.sites':
              {
                  title: req.body.title,
                  url: req.body.url,
                  date: req.body.date,
                  starred: req.body.starred,
                  favorites: req.body.favorites
              }
          }},(err, result) => {
              if (err) { console.log('Could not update data', err); }
              else {
                Document.find().exec((err, result) => {
                  if (err) { console.log('Cannot send back all data from post api, UPDATE'); }
                  else { res.send(result); }
                });
              }
          });
        }
      });
    }
  });
});


app.get('/docs', (req, res) => {
  Document.find().exec((err, results) => {
    if (err) { res.status(500).send('Could not get document') }
    else { res.send(results); }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.delete('/subject/:subject', (req, res) => {
  var subject = req.params.subject;
  Document.deleteOne({subject: subject}, (err) => {
    if (err) { console.log('Could not delete subject: ', err); }
    else { res.send(res.data) }
  });
});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});