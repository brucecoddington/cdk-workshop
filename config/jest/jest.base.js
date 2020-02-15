module.exports = {
  rootDir: "../../",
  collectCoverage: true,
  coverageDirectory: "<rootDir>/.jest/coverage",
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "\\.(ts|tsx).snap$",
    "\\.d.(ts|tsx)$",
    "\\.proxy.ts$"
  ],
  coverageReporters: ["text"],
  globals: {
    "ts-jest": {
      packageJson: "package.json"
    }
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  transform: {
    "\\.(ts|tsx)$": "ts-jest"
  },
  testEnvironment: "jest-dynalite/dist/environment",
  testRegex: "/.*\\.spec.(ts|tsx|js|jsx)$",
  testPathIgnorePatterns: [".yarn", "compiled", "dist", "/.*\\.snap$"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/jest.setup.ts"],
  watchPathIgnorePatterns: [".yarn", "__snapshots__"]
};
