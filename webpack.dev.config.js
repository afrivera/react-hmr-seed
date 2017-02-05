const webpack = require('webpack');

const config = {
  entry: {
    'bundle.js': ['./src/index.jsx', 'webpack-hot-middleware/client'],
  },
  output: {
    path: '/',
    filename: '[name]',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react'],
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
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
