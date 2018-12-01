const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Document = require('../db/Document.js');

const app = express();


const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));

app.post('/', (req, res) => {
  Document.create({

  })
  .then(() => {
    db.close();
    res.send('Document posted');
  })
  .catch(err => res.status(500).send('Could not post document', err))
});

app.get('/', (req, res) => {

});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});