module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

   // An array of glob patterns indicating a set of files for which coverage information should be collected
   collectCoverageFrom: ['mvp/**/*.{js, jsx}']

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  //An array of file extensions your module uses
  moduleFileExtensions: ['js', 'jsx'],

  //The path to modules that run code to configure/set up test env before each test
  setupFiles: ['<rootDir>/enzyme.config.js'],


  //The test environment that will be used for testing
  testEnvironment: 'jsdom',

  //The global patterns JEst uses to detect test files
  testMatch: ['**/__tests__/**'],

  //Which files to ignore
  testPathIgnorePatterns: ['<rootDir>/node_modules'],

  //Sets the URL for the jsdom env
  testURL: 'http://localhost',

  //An array of regexp pattern strings that are matched against all source file paths before transformation.
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  //Detailed test report
  verbose: false

};