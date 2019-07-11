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
  let { groupsID, category, subject, catID, categoryL, subjectL, foldColor, hasCat, hasSubj } = req.body;
  let key = `groups.${catID}.subjects`;

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
        console.log(groupsID, 'groupID')
        console.log(categoryL, 'cat l')
        console.log(category, 'cat')
        console.log(subject, 'sub in nocat nosub')
        Document.updateOne({_id: groupsID}, {$addToSet: {groups:{id: categoryL, category, color: foldColor, subjects: [{id: 0, subject: subject}], }}}, (err, result) => {
          if (err) { res.send(err); }
          else { res.send(result); }
        })
      } else if(!hasSubj) {
        console.log('yes cat, no sub');
        console.log(catID, 'catid')
        console.log(subjectL, 'l')
        console.log(subject, 'sub')
        console.log(category, 'category')
        Document.updateOne({'groups.id': catID}, {$addToSet:{[key]: {id: subjectL, subject}}}, (err, result) => {
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
  let { subject, category } = req.params;
  Document.find({ category: category, subject: subject }, 'title url', (err, result) => {
    if (err) { console.log('Failure to get titles: ', err); }
    else { res.status(200).send(result); }
  });
});

app.get('/update/:catEdited/:categoryID/:groupsID', (req, res) => {
  let { catEdited, groupsID } = req.params;
  let catID = parseInt(req.params.categoryID);
  let key = `groups.${catID}.category`;

  Document.updateOne({ _id: groupsID }, {$set:{[key]: catEdited}}, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
});

app.get('/update/:subEdited/:subjID/:catID/:groupsID', (req, res) => {
  let { subEdited, groupsID } = req.params;
  let catID = parseInt(req.params.catID);
  let subjID = parseInt(req.params.subjID);
  let key = `groups.${catID}.subjects.${subjID}.subject`;

  Document.updateOne({ _id: groupsID }, {$set:{[key]: subEdited}}, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
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


app.delete('/delete/:categoryToDelete/:groupsID', (req, res) => {
  let { categoryToDelete, groupsID } = req.params;
  //let catID = parseInt(req.params.categoryID);

  Document.updateOne({ _id: groupsID }, {$pull:{groups: {category: categoryToDelete}}}, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
   Document.deleteMany({ category: categoryToDelete }, (err, result) => {
      if (err) { console.log('Error at DELETE request: ', err); }
      else { console.log('Deleted category'); }
    });
});

app.delete('/delete/:sub/:categoryID/:groupsID', (req, res) => {
  let { sub, groupsID } = req.params;
  let catID = parseInt(req.params.categoryID);
  let key = `groups.${catID}.subjects`;
  console.log(sub, 'subject')
  console.log(catID, 'catID')

  Document.updateOne({ _id: groupsID }, {$pull:{[key]: { subject: sub }}}, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
  Document.deleteMany({ subject: sub }, (err, result) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else { console.log('Deleted subject'); }
  });
  // Document.deleteOne({}, (err) => {
  //   if (err) { console.log('Error at DELETE request: ', err); }
  //   else { console.log('Document successfully deleted'); }
  // });
});

app.delete('/delete/:titleToDelete', (req, res) => {
  let title = req.params.titleToDelete;
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
