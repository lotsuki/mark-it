const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan')
const session = require('express-session')
const compression = require('compression');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const Document = require('../db/models/Document.js');
const db = require('../db/index.js');
// const spdy = require('spdy');
//const fs = require('fs');
//const groupFile = require('../client/groups.txt');

const app = express();
let PORT = process.env.PORT || 3000;

// const options = {
//     key: fs.readFileSync(__dirname + '/../domain.key'),
//     cert:  fs.readFileSync(__dirname + '/../domain.crt')
// }

// Route requires
const user = require('./routes/user');

// MIDDLEWARE
app.use(morgan('dev'));

// Sessions
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: db }),
    resave: false, //required
    saveUninitialized: false //required
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use('/user', user);

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.set("Access-Control-Allow-Methods", "GET,PATCH,PUT,POST,DELETE,OPTIONS");
  res.set("Cache-Control", "public, no-cache");
  next();
});
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
        Document.updateOne({_id: groupsID}, {$addToSet: {groups:{id: categoryL, category, color: foldColor, subjects: [{id: 0, subject: subject}]}}}, (err, result) => {
          if (err) { res.send(err); }
          else { res.send(result); }
        })
      } else if(!hasSubj) {
        Document.updateOne({'groups.id': catID}, {$addToSet:{[key]: {id: subjectL, subject: subject}}}, (err, result) => {
          if (err) { console.log('Failed to update subjects at POST: ', err); }
          else { res.send(result); }
        })
      } else { res.send(result); }
    }
  });
});


app.post('/update/subIds/:categoryID', (req,res) => {
  const groups = req.body;
  const categoryID = parseInt(req.params.categoryID);
  const key = `groups.${categoryID}.subjects`

  Document.updateOne({groups:{$exists:true}}, {$set:{[key]: groups}}, (err, result) => {
    if (err) { console.log('Failed to update subjects at POST: ', err); }
    else { res.send(result); }
  })
});


app.post('/update/catIds', (req,res) => {
  const groups = req.body;

  Document.updateOne({groups:{$exists:true}}, {$set:{groups}}, (err, result) => {
    if (err) { console.log('Failed to update subjects at POST: ', err); }
    else { res.send(result); }
  })
})


// app.get('/user', (req, res) => {
//   Document.findOne({ username: { $exists: true } }, (err, result) => {
//     if (err) { console.log('Failure to get user obj: ', err); }
//     else { res.send(result); }
//   });
// });


app.get('/groups', (req, res) => {
  Document.findOne({ groups: { $exists: true } }, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
});


app.get('/titles', (req, res) => {
  Document.find({title: {$exists:true}}, 'subject, title url', (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
});


app.get('/titles/:category/:subject', (req, res) => {
  let { subject, category } = req.params;

  Document.find({ category: category, subject: subject }, 'subject title url', (err, result) => {
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


app.delete('/delete/subject/:subjectToDelete/:categoryID/:groupsID', (req, res) => {
  let { subjectToDelete, groupsID } = req.params;
  let catID = parseInt(req.params.categoryID);
  let key = `groups.${catID}.subjects`;

  Document.updateOne({ _id: groupsID }, {$pull:{[key]: { subject: subjectToDelete }}}, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else { res.send(result); }
  });
  Document.deleteMany({ subject: subjectToDelete }, (err) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else { console.log('Deleted subject'); }
  });
});


app.delete('/delete/title/:titl/:subj', (req, res) => {
  let {titl, subj } = req.params;

  Document.deleteOne({ title: titl }, (err) => {
    if (err) { console.log('Error at DELETE request: ', err); }
    else {
      Document.find({$and: [{subject: subj}, {title: {$ne: titl}}]}, (err, result) => {
        if (err) { console.log('Error at DELETE request: ', err); }
        else { res.send(result); }
      });
    }
  });
});

app.delete('/delete/category/:categoryToDelete/:groupsID', (req, res) => {
  let { categoryToDelete, groupsID } = req.params;

  Document.updateOne({ _id: groupsID }, {$pull:{groups: {category: categoryToDelete}}}, (err, result) => {
    if (err) { console.log('Failure to get user obj: ', err); }
    else {res.send(result); }
  });
   Document.deleteMany({ category: categoryToDelete }, (err) => {
      if (err) { console.log('Error at DELETE request: ', err); }
      else { console.log('Deleted category'); }
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
