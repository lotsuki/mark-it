const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Document = require('../db/Document.js');
//const db = require('../db/index.js');
const app = express();
// const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/mydocapp';
// mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));

//TODO: fix form submit when needed to add category/subject
app.post('/form', (req, res) => {
  // mongoose.connect(uri, {
  //   useNewUrlParser: true,
  //   autoIndex: true
  let category = req.body.category;
  let subject = req.body.subject;
  Document.create({
        category: category,
        subject: subject,
        title: req.body.title,
        url: req.body.url,
        date: req.body.date
      }, (err, result) => {
    if (err) {
      //console.log('Error at POST: ', err);
      res.status(400).send('Error at POST: ', err);
    }
    else {
      let cat = `bmarks.$.${category}`;
      Document.updateOne({bmarks: {$elemMatch: {[category]: {$exists: true}}}},
        {$addToSet:{[cat]: subject}}, {upsert: false},(err, result) => {
          if (err) {
            console.log('Cannot send back all data from post api, UPDATE: ', err);
            res.status(400);
          }
          else { res.status(201).send(result); }
      });
    }
  });
});

app.get('/user', (req, res) => {
  Document.find({ username: { $exists: true } }, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.status(200).send(result); }
  });
});

app.get('/titles', (req, res) => {
  Document.find({}, 'title url', (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.status(200).send(result); }
  });
});

app.get('/titles/:category/:subject', (req, res) => {
  let subject = req.params.subject
  let category = req.params.category
  Document.find({ category: category, subject: subject }, 'title url', (err, result) => {
    if (err) { console.log('Failure to get titles: ', err); }
    else { res.status(200).send(result); }
  });
});

app.get('/update/subj/:defaultVal/:newVal/:category', (req, res) => {
  let defaultVal = req.params.defaultVal;
  let newVal = req.params.newVal;
  let cat = req.params.category;
  let key = `bmarks.${cat}`;
  let key2 = `bmarks.${cat}.$`;

  Document.updateOne({[key]: defaultVal}, {$set: {[key2]: newVal}}, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.status(200).send(result); }
  });
});

app.get('/update/cat/:defaultVal/:newVal', (req, res) => {
  let defaultVal = req.params.defaultVal;
  let newVal = req.params.newVal;
  let key = `bmarks.${defaultVal}`;
  let value = `bmarks.${newVal}`;

  Document.updateOne({username: {$exists:true}}, {$rename:{[key]: value}}, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.status(200).send(result); }
  });
});

// app.get('/update/title/:defaultVal/:newVal', (req, res) => {
//   let defaultVal = req.params.defaultVal;
//   let newVal = req.params.newVal;

//   Document.updateOne({title: defaultVal}, {$set:{title: newVal}}, (err, result) => {
//     if (err) { console.log('Failure to get user obj: ', err); }
//     else { res.send(result); }
//   });
// });

app.get('/', (req, res) => {
  console.log(res)
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Have confirmation for this and show how many bookmarks this folder contains

// app.delete('/delete/cat/:cat', (req, res) => {
//   let cat = req.params.cat;
//   Document.deleteMany({ category: cat }, (err) => {
//     if (err) { console.log('Error at DELETE request: ', err); }
//     else { console.log('Document successfully deleted'); }
//   });
// });

// app.delete('/delete/subj/:subj', (req, res) => {
//   let subj = req.params.subj;
//   Document.deleteMany({ subject: subj }, (err) => {
//     if (err) { console.log('Error at DELETE request: ', err); }
//     else { console.log('Document successfully deleted'); }
//   });
// });

app.delete('/delete/title/:title', (req, res) => {
  let title = req.params.title;
  Document.deleteOne({ title: title }, (err) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else { console.log('Document successfully deleted'); }
  });
});

app.delete('/bookmarks/:title/:subject', (req, res) => {
  let title = req.params.title;
  let subject = req.params.subject;

  Document.deleteOne({ title: title }, (err) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else {
      Document.find({ subject: subject }, (err, result) => {
        if (err) { console.log('Failure to get user obj: ', err); }
        else { console.log(result); res.send(result); }
      });
    }
  });
});


if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  });
}


module.exports = app;
