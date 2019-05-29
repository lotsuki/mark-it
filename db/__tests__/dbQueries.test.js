/**
 * @jest-environment node
*/


import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { user, data } from '../mockDataTest.js';

// May require additional time for downloading MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

let mongoServer;

const schema = {
  category: String,
  subject: String,
  title: String,
  url: String,
  date: String,
  username: String,
  password: String,
  bmarks: Object
};


beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, { useNewUrlParser: true }, (err) => {
    if (err) console.error(err);
  });
});

afterAll(async () => {
  mongoose.disconnect();
  await mongoServer.stop();
});

describe('DB queries', () => {
  const Document = mongoose.model('Document', new mongoose.Schema(schema));
  it('should create documents', async () => {
    let cnt = await Document.count();
    await Document.create(user)
    let newCnt = await Document.count();
    expect(newCnt).toEqual(cnt + 1);
  });
  it('should insert many documents', async () => {
    let cnt = await Document.count();
    await Document.insertMany(data)
    let newCnt = await Document.count();
    expect(newCnt).toEqual(cnt + 9);
  });
  it('should find one document', async () => {
     let doc = await Document.find({ username: { $exists: true } })
     expect(doc).toHaveLength(1)
     expect(doc[0].username).toBeDefined()
  });
  it('should find all documents', async () => {
     let cnt = await Document.count()
     let docs = await Document.find({})
     expect(docs.length).toEqual(cnt)
  });
  it('should find many documents', async () => {
     let result = await Document.find({ category: 'Food', subject:'Desserts' })
     expect(result.length).toBe(4)
  });
  it('should update one document by adding string to embedded array', async () => {
    //let cat = `bmarks.$.Tech`;
    // let oldDoc = await Document.find({'bmarks.$Tech': {$exists: true}})
    //let newDoc = await Document.updateOne({bmarks: {$elemMatch: {'Tech': {$exists: true}}}},
      //  {$addToSet:{[cat]: 'MongoDB'}})

  });
  it('should delete one document', async () => {
    let oldCnt = await Document.count()
    await Document.deleteOne({ title: "Senior Program Manager" })
    let newCnt = await Document.count()
    expect(newCnt).toBeLessThan(oldCnt)
    expect(newCnt).toEqual(oldCnt - 1)
  });
});

// Document.updateOne({[key]: defaultVal}, {$set: {[key2]: newVal}}, (err, result) => {
//     if (err) { console.log('Failure to get user obj: ', err); }
//     else { res.send(result); }
//   });

//   Document.updateOne({username: {$exists:true}}, {$rename:{[key]: value}}, (err, result) => {
//     if (err) { console.log('Failure to get user obj: ', err); }
//     else { res.send(result); }
//   });

// app.delete('/delete/title/:title', (req, res) => {
//   let title = req.params.title;
//   Document.deleteOne({ title: title }, (err) => {
//     if (err) { console.log('Error at DELETE request: ', err); }
//     else { console.log('Document successfully deleted'); }
//   });
// });

// app.delete('/bookmarks/:title/:subject', (req, res) => {
//   let title = req.params.title;
//   let subject = req.params.subject;

//   Document.deleteOne({ title: title }, (err) => {
//     if (err) { console.log('Error at DELETE request: ', err); }
//     else {
//       Document.find({ subject: subject }, (err, result) => {
//         if (err) { console.log('Failure to get user obj: ', err); }
//         else { console.log(result); res.send(result); }
//       });
//     }
//   });
// });