const gulp        = require('gulp');
const del         = require('del');
const projectPath = require('../lib/projectPath');

const cleanTask = function (cb) {
  return del([projectPath(PATH_CONFIG.dest)], { force: true })
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;
