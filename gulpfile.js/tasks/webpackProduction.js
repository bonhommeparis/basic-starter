if(!TASK_CONFIG.javascripts) return

const {task}    = require('gulp');
const logger  = require('../lib/compileLogger');
const webpack = require('webpack');

const webpackProductionTask = function(callback) {

  const webpackConfig = require('../lib/webpack-multi-config')('production');

  webpack(webpackConfig, function(err, stats) {
    logger(err, stats);
    callback();
  })
};

task('webpack:production', webpackProductionTask);
module.exports = webpackProductionTask;
