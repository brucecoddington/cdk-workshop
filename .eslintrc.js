module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    },
    project: "./tsconfig.json"
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint", "prettier", "simple-import-sort"],
  settings: {
    "import/resolver": {
      typescript: {
        "alwaysTryTypes": true
      }
    }
  },
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    "simple-import-sort/sort": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-optional-chain": "error",
    "no-console": "off",
    complexity: [
      "error",
      {
        max: 5
      }
    ],
    "no-warning-comments": [
      "error",
      {
        terms: [
          "todo",
          "fixme",
          "to do",
          "fix me",
          "TODO",
          "Todo",
          "FIXME",
          "Need to",
          "remember"
        ],
        location: "anywhere"
      }
    ],
    "max-depth": [
      "error",
      {
        max: 3
      }
    ]
  },
  overrides: [
    {
      files: ["**/*.test.*"],
      rules: {
        "no-magic-numbers": "off"
      }
    }
  ]
};
