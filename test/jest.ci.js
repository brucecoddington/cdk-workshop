const baseConfig = require("./jest.base");

module.exports = {
  ...baseConfig,
  testResultsProcessor: "jest-sonar-reporter",
  coverageReporters: ["lcov", "text", "html"]
};
