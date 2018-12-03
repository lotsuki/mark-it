const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Document = require('../db/Document.js');
const db = require('../db/index.js');
const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));

app.post('/', (req, res) => {
  Document.countDocuments({subject: req.body.subject}, (err, count) => {
    if (count > 0) {
      Document.updateOne({subject: req.body.subject}, {$push: {sites: {
        title: req.body.sites[0].title,
        url: req.body.sites[0].url,
        date: req.body.sites[0].date
      }}})
      .then(() => {
        db.close();
        res.send('Document posted');
      })
      .catch(err => res.status(500).send('Could not post document', err));
    } else {
      Document.create({
        subject: req.body.subject,
        sites: [{
          title: req.body.sites[0].title,
          url: req.body.sites[0].url,
          date: req.body.sites[0].date
        }]
      })
      .then(() => {
        db.close();
        res.send('Document posted');
      })
      .catch(err => res.status(500).send('Could not post document', err));
    }
  });
});

app.get('/docs', (req, res) => {
  Document.find().exec((err, results) => {
    if (err) { res.status(500).send('Could not get document') }
    else { res.send(results) }
  })
});

// app.get('/subject', (req, res) => {
//   Document.find().exec((err, results) => {
//     if (err) { res.status(500).send('Could not get document') }
//     else { res.send(results) }
//   })
// });



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});