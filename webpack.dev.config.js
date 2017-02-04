const config = {
  entry: {
    'bundle.js': ['./src/index.js', 'webpack-hot-middleware/client'],
  },
  output: {
    path: '/',
    filename: '[name]',
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
  devtool: 'eval-source-map',
};

module.exports = config;
