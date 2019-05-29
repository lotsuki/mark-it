module.exports = {
  preset: "@shelf/jest-mongodb",
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '3.6.10',
      skipMD5: true
    },
    autoStart: false
  },
  testEnvironment: "node"
};