const baseConfig = require("./jest.base");

module.exports = {
  ...baseConfig,
  coverageReporters: ["html"],
  testResultsProcessor: "<rootDir>/node_modules/jest-html-reporter"
};
