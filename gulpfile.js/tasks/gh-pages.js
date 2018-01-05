const ghPages = require('gulp-gh-pages');
const gulp    = require('gulp');
const os      = require('os');
const path    = require('path');

const ghPagesTask = function() {
  const pkg = require(path.resolve(process.env.PWD, 'package.json'));

  const settings = {
    url: pkg.homepage,
    src: path.resolve(process.env.PWD, PATH_CONFIG.finalDest, '**/*'),
    ghPages: {
      cacheDir: path.join(os.tmpdir(), pkg.name)
    }
  };

  return gulp.src(settings.src)
    .pipe(ghPages(settings.ghPages));
};

gulp.task('deploy', ['build'], ghPagesTask);
module.exports = ghPagesTask;
