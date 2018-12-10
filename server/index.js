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
  var newPost = [];
  mongoose.connect(uri, {
    useNewUrlParser: true,
    autoIndex: true
  });
  Document.findOne({subject: req.body.subject}, {lean: true}, (err, result) => {
    if (err) { console.log('Error at POST', err); }
    else if (!result) {
      Document.create({
        subject: req.body.subject,
        sites: [{
          title: req.body.sites[0].title,
          url: req.body.sites[0].url,
          date: req.body.sites[0].date
        }]
      }, (err, result) => {
        if (err) { console.log('err', err) }
        else {  Document.find().exec((err, results) => {
          if (err) { console.log('Cannot send back all data from post api, UPDATE'); }
          else { res.send(results); }
        });
        }
      });
    } else {
      Document.updateOne({subject: req.body.subject}, {$push: {sites: {
        title: req.body.sites[0].title,
        url: req.body.sites[0].url,
        date: req.body.sites[0].date
      }}},(err, result) => {
        if (err) { console.log('Could not update data', err); }
        else {
          Document.find().exec((err, results) => {
            if (err) { console.log('Cannot send back all data from post api, UPDATE'); }
            else { res.send(results); }
          });
        }
      });
    }
  })
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