const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const app = express();

app.use(devMiddleware(compiler));
app.use(hotMiddleware(compiler));

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});