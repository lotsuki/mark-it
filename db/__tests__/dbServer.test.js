/**
 * @jest-environment node
*/


import { Db, MongoClient } from 'mongodb';
import { MongoMemoryServer, MongoInstanceDataT } from 'mongodb-memory-server';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
let con = MongoClient;
let db = Db;
let mongoServer = MongoMemoryServer;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  con = await MongoClient.connect(mongoUri, { useNewUrlParser: true });
  db = con.db(await mongoServer.getDbName());
});

afterAll(async () => {
  if (con) con.close();
  if (mongoServer) await mongoServer.stop();
});

describe('Single mongoServer', () => {
  it('should start mongo server', async () => {
    expect(db).toBeDefined();
    const col = db.collection('documents');
    const result = await col.insertMany([{ a: 1 }, { b: 1 }]);
    expect(result.result).toMatchSnapshot();
    expect(await col.countDocuments({})).toBe(2);
  });

  it('should get URI of specified DB name', async () => {
    const port = await mongoServer.getPort();
    expect(await mongoServer.getUri('myapp')).toBe(`mongodb://127.0.0.1:${port}/myapp`);
  });
});

// import mongoose from 'mongoose';

// import * as loaders from '../src/loader';

// const { ObjectId } = mongoose.Types;

// process.env.NODE_ENV = 'test';

// const config = {
//   db: {
//     test: 'mongodb://localhost/test',
//   },
//   connection: null,
// };

// function connect() {
//   return new Promise((resolve, reject) => {
//     if (config.connection) {
//       return resolve();
//     }

//     const mongoUri = 'mongodb://localhost/test';

//     mongoose.Promise = Promise;

//     const options = {
//       server: {
//         auto_reconnect: true,
//         reconnectTries: Number.MAX_VALUE,
//         reconnectInterval: 1000,
//       },
//     };

//     mongoose.connect(mongoUri, options);

//     config.connection = mongoose.connection;

//     config.connection
//       .once('open', resolve)
//       .on('error', (e) => {
//         if (e.message.code === 'ETIMEDOUT') {
//           console.log(e);

//           mongoose.connect(mongoUri, options);
//         }

//         console.log(e);
//         reject(e);
//       });
//   });
// }

// function clearDatabase() {
//   return new Promise(resolve => {
//     let cont = 0;
//     let max = Object.keys(mongoose.connection.collections).length;
//     for (const i in mongoose.connection.collections) {
//       mongoose.connection.collections[i].remove(function() {
//         cont++;
//         if(cont >= max) {
//           resolve();
//         }
//       });
//     }
//   });
// }

// export async function setupTest() {
//   await connect();
//   await clearDatabase();
// }