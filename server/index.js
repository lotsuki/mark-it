const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const Document = require('../db/Document.js');
const db = require('../db/index.js');
// const spdy = require('spdy');
// const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// const options = {
//     key: fs.readFileSync(__dirname + '/../domain.key'),
//     cert:  fs.readFileSync(__dirname + '/../domain.crt')
// }

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.set("Access-Control-Allow-Methods", "GET,PATCH,PUT,POST,DELETE,OPTIONS");
  res.set("Cache-Control", "public, no cache");
  next();
});
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public/`));

app.post('/form', (req, res) => {
  const { category, subject, categoryID, categoryL, subjectL, color, hasCat, hasSubj } = req.body;
  const key = `groups.${categoryID}.subjects`;
  Document.create({
        category: category,
        subject: subject,
        title: req.body.title,
        url: req.body.url,
        date: req.body.date
      }, (err, result) => {
    if (err) {
      console.log('error at post: ', err)
      res.send('Error at POST: ', err);
    } else {
      if (!hasCat && !hasSubj) {
        Document.updateOne({groups: {$exists: true}}, {$addToSet: {groups:{id: categoryL, category, color, subjects: [{id: 0, subject: subject}], }}}, (err, result) => {
          if (err) { res.send(err); }
          else { res.send(result); }
        })
      } else if(!hasSubj) {
        console.log('yes cat, no sub');
        Document.updateOne({'groups.id': categoryID}, {$addToSet:{[key]: {id: subjectL, subject}}}, (err, result) => {
          if (err) { console.log('Failed to update subjects at POST: ', err); }
          else { res.send(result); }
        })
      }
    }
  });
});

app.get('/user', (req, res) => {
  Document.findOne({ username: { $exists: true } }, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
});

app.get('/groups', (req, res) => {
  Document.findOne({ groups: { $exists: true } }, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
});

app.get('/titles', (req, res) => {
  Document.find({title: {$exists:true}}, 'subject title url', (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
});

app.get('/titles/:category/:subject', (req, res) => {
  const { subject, category } = req.params;
  Document.find({ category: category, subject: subject }, 'title url', (err, result) => {
    if (err) { console.log('Failure to get titles: ', err); }
    else { res.status(200).send(result); }
  });
});

// app.get('/update/subj/:defaultVal/:newVal/:category', (req, res) => {
//   let defaultVal = req.params.defaultVal;
//   let newVal = req.params.newVal;
//   let cat = req.params.category;
//   let key = `bmarks.${cat}`;
//   let key2 = `bmarks.${cat}.$`;

//   Document.updateOne({[key]: defaultVal}, {$set: {[key2]: newVal}}, (err, result) => {
//     if (err) { console.log('Failure to get user obj: ', err); }
//     else { res.status(200).send(result); }
//   });
// });

//db.documents.updateOne({'groups.id': id}, {$set:{'groups.id.category': 'News'}})

app.get('/update/cat/:catEdited/:categoryID', (req, res) => {
  const catEdited = req.params.catEdited;
  const id = parseInt(req.params.categoryID);
  const key = `groups.${id}.category`;

  Document.updateOne({'groups.id': id}, {$set:{[key]: catEdited}}, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
});

//edit subject
//db.documents.updateOne({'groups.id': id},{$set:{'groups.id.subjects.subID.subject': 'Indian'}})


// app.get('/update/title/:defaultVal/:newVal', (req, res) => {
//   let defaultVal = req.params.defaultVal;
//   let newVal = req.params.newVal;

//   Document.updateOne({title: defaultVal}, {$set:{title: newVal}}, (err, result) => {
//     if (err) { console.log('Failure to get user obj: ', err); }
//     else { res.send(result); }
//   });
// });


app.delete('/delete/:cat/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const category = req.params.cat;

  Document.updateOne({'groups.id': id}, {$pull:{groups: {id}}}, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
   Document.deleteMany({ category }, (err, result) => {
      if (err) { console.log('Error at DELETE request: ', err); }
      else { console.log('Deleted categories'); }
    });
});

app.delete('/delete/subj/:subj', (req, res) => {
  const subj = req.params.subj;
  Document.deleteMany({ subject: subj }, (err, result) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else { res.send(result); }
  });
  // Document.deleteOne({}, (err) => {
  //   if (err) { console.log('Error at DELETE request: ', err); }
  //   else { console.log('Document successfully deleted'); }
  // });
});

app.delete('/delete/:titleToDelete', (req, res) => {
  const title = req.params.titleToDelete;
  Document.deleteOne({ title }, (err, result) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else { res.send(result); }
  });
});

//if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
//}



if (process.env.NODE_ENV !== 'test') {
  if (PORT === null || PORT === '') {
    PORT = 3000;
  }
  // spdy
  // .createServer(options, app)
  // .listen(PORT, (error) => {
  //   if (error) {
  //     console.error(error)
  //     return process.exit(1)
  //   } else {
  //     console.log('Listening on port: ' + PORT + '.')
  //   }
  // })

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  });
}


module.exports = app;
