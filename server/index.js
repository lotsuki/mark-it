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
  let category = req.body.category;
  let subject = req.body.subject;
  let categoryID = req.body.categoryID;
  let categoryL = req.body.categoryL;

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
    }
    else {
      let hasCategory = req.body.hasCategory;
      let hasSubject = req.body.hasSubject;
      if (!hasCategory && !hasSubject) {
        Document.updateOne({groups: {$exists: true}}, {$addToSet: {groups:{id: categoryL, category: category, color: 'blue', subjects: [{id: 0, subject: subject}], }}}, (err, result) => {
          if (err) { res.send(err); }
          else { res.send(result); }
        })
      } else if(!hasSubject) {
        Document.updateOne({username: {$exists:true}}, {$addToSet: {[key]: subject}}, (err, result) => {
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
  let subject = req.params.subject;
  let category = req.params.category;
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
  let catEdited = req.params.catEdited;
  let id = parseInt(req.params.categoryID);
  let key = `groups.${id}.category`;

  Document.updateOne({'groups.id': id}, {$set:{[key]: catEdited}}, (err, result) => {
    console.log(result)
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
});

//add subject

// db.documents.updateOne({'groups.id': id}, {$addToSet:{'groups.id.subjects': {id: 4, subject: 'hey'}}})
// db.documents.updateOne({groups: {$elemMatch: {id: 1}}}, {$addToSet:{'groups.$.subjects': {id: 3, subject: 'Mongo'}}})

//add category
// db.documents.updateOne({groups: {$exists: true}}, {$addToSet: {groups:{id: 4, category: 'Sports', color: 'blue', subjects: [], }}})


//edit category
//db.documents.updateOne({'groups.id': id}, {$set:{'groups.id.category': 'News'}})
// db.documents.updateOne({groups: {$elemMatch: {category: 'Tech'}}}, {$set:{'groups.$.category': 'News'}})

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



//Have confirmation for this and show how many bookmarks this folder contains

// app.delete('/delete/cat/:cat', (req, res) => {
//   let cat = req.params.cat;
//   Document.deleteMany({ category: cat }, (err) => {
//     if (err) { console.log('Error at DELETE request: ', err); }
//     else { console.log('Document successfully deleted'); }
//   });
// });



app.delete('/delete/:category/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let category = req.params.category;

  Document.updateOne({'groups.id': id}, {$pull:{groups: {id}}}, (err, result) => {
    console.log(result)
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });

  Document.deleteMany({ category }, (err) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else { res.send(result); }
  });

});


//   else if (group === 'subject') {
//     Document.deleteMany({ subject: item }, (err) => {
//       if (err) { console.log('Error at DELETE request: ', err); }
//       else { console.log('Document successfully deleted'); }
//     });

//   } else if (group === 'title') {
//     Document.deleteOne({ title: item }, (err) => {
//       if (err) { console.log('Error at DELETE request: ', err); }
//       else { console.log('Document successfully deleted'); }
//     });

//   }
//   Document.deleteMany({ subject: subj }, (err) => {
//     if (err) { console.log('Error at DELETE request: ', err); }
//     else { console.log('Document successfully deleted'); }
// });

app.delete('/delete/subj/:subj', (req, res) => {
  let subj = req.params.subj;
  Document.deleteMany({ subject: subj }, (err) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else { console.log('Document successfully deleted'); }
  });
  // Document.deleteOne({}, (err) => {
  //   if (err) { console.log('Error at DELETE request: ', err); }
  //   else { console.log('Document successfully deleted'); }
  // });
});

app.delete('/delete/title/:title', (req, res) => {
  let titl = req.params.title;
  Document.deleteOne({ title: titl }, (err) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else { console.log('Document successfully deleted'); }
  });
});

app.delete('/bookmarks/:title/:subject', (req, res) => {
  let title = req.params.title;
  let subject = req.params.subject;

  Document.deleteOne({ title }, (err) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else {
      Document.find({ subject }, (err, result) => {
        if (err) { console.log('Failure to get user obj: ', err); }
        else { console.log(result, 'find titles after delete'); res.send(result); }
      });
    }
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
