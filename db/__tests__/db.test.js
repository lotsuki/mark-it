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
  await mongoose.connect(mongoUri, (err) => {
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
     console.log(result)


  });
  // it('should update one document', async () => {
  //   await Document.findOne({ username: { $exists: true }});
  //   await Document.updateOne({bmarks: {$elemMatch: {[category]: {$exists: true}}}},
  //       {$addToSet:{[cat]: subject}})

  // });


  //
  // it('should delete one document', async () => {
  //    Document.deleteOne({ title: title })
  // });
});

// Document.updateOne({bmarks: {$elemMatch: {[category]: {$exists: true}}}},
//         {$addToSet:{[cat]: subject}}, {upsert: false},(err, result) => {
//           if (err) { console.log('Cannot send back all data from post api, UPDATE: ', err); }
//           else { console.log(result); res.send(result); }
//       });
//     }