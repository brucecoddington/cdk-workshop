const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const rootDir = path.resolve(__dirname, "../../");
const lambdaDir = path.resolve(rootDir, "src", "lambda");
const cdkDir = path.resolve(rootDir, "src", "cdk");

// Add each file in lambdas directory as an entry point
// Use object syntax for entry point so that each lambda
// can be bundled into a single file with the same name
const lambdaEntryPoints = fs.readdirSync(lambdaDir).reduce((acc, file) => {
  if (file.endsWith(".ts") && !file.endsWith(".test.ts")) {
    const fileName = file.replace(".ts", "");
    acc[fileName] = `${lambdaDir}/${file}`;
  }
  return acc;
}, {});

module.exports = {
  target: "node",
  entry: { ...lambdaEntryPoints, app: path.resolve(cdkDir, "app") },
  output: {
    path: path.resolve(rootDir, "dist"),
    filename: "[name].js", // File name in dist folder will be same as in lambdas folder
    libraryTarget: "commonjs"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: require.resolve("ts-loader") }]
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true, test: /\app.ts?$/ }),
  ]
};
