const ghPages     = require('gulp-gh-pages');
const gulp        = require('gulp');
const os          = require('os');
const projectPath = require('../lib/projectPath');

const ghPagesTask = function() {
  const pkg = require(path.resolve(process.env.PWD, 'package.json'));

  const settings = {
    src: projectPath(PATH_CONFIG.finalDest, '**/*')
  }

  return gulp.src(settings.src)
    .pipe(ghPages(TASK_CONFIG.ghPages))
};

gulp.task('deploy', ['build'], ghPagesTask);
module.exports = ghPagesTask;
