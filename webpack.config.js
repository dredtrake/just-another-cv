const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'app/js')
  },
  module: {
    rules: [
      { test: /\.tmpl$/, loader: 'handlebars-loader' }
    ]
  }
};