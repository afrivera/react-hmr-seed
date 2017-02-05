const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config');
const prompt = require('prompt');
const tcpPortUsed = require('tcp-port-used');

const app = express();
const compiler = webpack(webpackConfig);

const hotMiddleware = [
  webpackDevMiddleware(compiler, {
    publicPath: 'http://localhost:3000/',
    hot: true,
    stats: {
      colors: true,
    },
  }), webpackHotMiddleware(compiler, {})];

app.use(hotMiddleware);

let port = 3000;
tcpPortUsed.check(3000, '127.0.0.1')
    .then((inUse) => {
      if (inUse) {
        prompt.start();
        prompt.get('port', (err, res) => {
          port = res.port;
        });
      }
      app.set('views', './views');
      app.set('view engine', 'pug');
      app.listen(port, () => {
        console.warn('Listening on port 3000');
      });
      app.get('/', (req, res) => {
        res.render('index');
      });
    })
    .catch((err) => {
      console.error(`error checking if the port is in use: ${err}`);
      port = null;
    });

