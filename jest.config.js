// jest.config.js
module.exports = {
   // Automatically clear mock calls and instances between every test
   clearMocks: true,

   // The directory where Jest should output its coverage files
   coverageDirectory: "coverage",

   coverageReporters: ["text","json", "html"],

   // An array of file extensions your modules use
   moduleFileExtensions: ["js", "json", "node"],

   // The test environment that will be used for testing
   testEnvironment: "node",

   // The glob patterns Jest uses to detect test files
   testMatch: [
      "**/__tests__/**/*.js?(x)",
      "**/?(*.)+(spec|test).js?(x)"
   ],

   // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
   testPathIgnorePatterns: ["/node_modules/"],

   // Add any Jest community packages setup here
   setupFilesAfterEnv: ["jest-extended/all"],
};
