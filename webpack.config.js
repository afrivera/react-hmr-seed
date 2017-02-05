const path = require('path');

const config = {
  entry: {
    js: './src/index.jsx',
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'file-loader?name=[name].[ext]',
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader'],
    }],
  },
};

module.exports = config;
