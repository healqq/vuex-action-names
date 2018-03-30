const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./example/index.js",
  output: {
      filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
      rules: [
          // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
          { test: /\.tsx?$/, loader: "ts-loader" }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
}
