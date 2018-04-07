const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: "./src/index.ts",
  output: {
      library: "vuexActionNames",
      libraryTarget: "umd",
      filename: "vuex-action-names.js"
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
  externals: {
    vuex: 'vuex',
  },
}
