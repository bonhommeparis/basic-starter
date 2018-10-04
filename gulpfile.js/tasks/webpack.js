
const gulp    = require('gulp');
const logger  = require('../lib/compileLogger');
const webpack = require('webpack');

const testo = function(callback) {

  var webpackConfig = require('../lib/webpack-multi-config')('production');

  webpack(webpackConfig, function(err, stats) {
    logger(err, stats);
    callback();
  })
}

gulp.task('test', testo);
module.exports = testo;
