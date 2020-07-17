// core
const path = require("path");

// config
const mode = process.env.NODE_ENV || "production";

module.exports = {
  output: {
    filename: "worker.js",
    path: path.join(__dirname, "dist"),
  },
  mode,
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};
