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
  console.log(db)
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
    if (err) { console.log('Error at POST', err); }
    else {
      let cat = `bmarks.$.${category}`;
      Document.updateOne({bmarks: {$elemMatch: {[category]: {$exists: true}}}},
        {$addToSet:{[cat]: subject}}, {upsert: false},(err, result) => {
          if (err) { console.log('Cannot send back all data from post api, UPDATE'); }
          else { console.log(result); res.send(result); }
      });
    }
  });
});


//   Document.findOne({category: req.body.category}, {lean: true}, (err, result) => {
//     if (err) { console.log('Error at POST', err); }
//     else if (!result) {
//       Document.create({
//         category: req.body.category,
//         subject: req.body.subject,
//         title: req.body.title,
//         url: req.body.url,
//         date. req.body.date
//       }, (err, result) => {
//         if (err) { console.log('err at new category post', err) }
//         else {  Document.find().exec((err, result) => {
//           if (err) { console.log('Cannot send back all data from post api, UPDATE'); }
//           else { res.send(result); }
//         });
//         }
//       });
//     } else {
//       Document.find({'subjects.subject': req.body.subject}, (err, result) => {
//         if (err) { console.log('Error at repeat subject POST', err); }
//         else if (result.length === 0) {
//           Document.findOneAndUpdate({category: req.body.category}, {$push: {subjects: {
//               subject: req.body.subject,
//               sites: [{
//                 title: req.body.title,
//                 url: req.body.url,
//                 date: req.body.date
//               }]
//             }}}, (err, result) => {
//             if (err) { console.log('err at new category post', err) }
//             else {  Document.find().exec((err, result) => {
//               if (err) { console.log('Cannot send back all data from post api, UPDATE'); }
//               else { res.send(result); }
//             });
//             }
//           });
//         } else {
//           Document.update({category: req.body.category, 'subjects.subject': req.body.subject}, {$push: {'subjects.$.sites':
//               {
//                   title: req.body.title,
//                   url: req.body.url,
//                   date: req.body.date
//               }
//           }},(err, result) => {
//               if (err) { console.log('Could not update data', err); }
//               else {
//                 Document.find().exec((err, result) => {
//                   if (err) { console.log('Cannot send back all data from post api, UPDATE'); }
//                   else { res.send(result); }
//                 });
//               }
//           });
//         }
//       });
//     }
//   });
// });


app.get('/docs', (req, res) => {
  Document.find({ username: { $exists: true } }, (err, result) => {
    if (err) { console.log('Failure to get user obj', err); }
    else { res.send(result); }
  });
});

app.get('/titles/:category/:subject', (req, res) => {
  let subject = req.params.subject
  let category = req.params.category
  Document.find({ category: category, subject: subject }, 'title url', (err, result) => {
    if (err) { console.log('Failure to get titles', err); }
    else { res.send(result); }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// const cursor = db
//   .collection('inventory')
//   .find({
//     status: 'A'
//   })
//   .project({ item: 1, status: 1 });




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});