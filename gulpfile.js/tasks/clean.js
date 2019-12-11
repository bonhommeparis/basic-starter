const { task }    = require('gulp');
const del         = require('del');
const projectPath = require('../lib/projectPath');

const clean = function (cb) {
  const src = projectPath(PATH_CONFIG.dest, '**/**');
  return del([src]);
};

module.exports = clean;
task('clean', clean);
