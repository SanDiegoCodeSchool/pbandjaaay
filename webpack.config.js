'use strict';
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    javascript: './client/index.jsx',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
