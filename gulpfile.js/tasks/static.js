if(!TASK_CONFIG.static) return;

const changed     = require('gulp-changed');
const {src, dest, task} = require('gulp');
const projectPath = require('../lib/projectPath');
const browserSync  = require('browser-sync');

const staticTask = function() {

  const srcPath           = projectPath(PATH_CONFIG.src, PATH_CONFIG.static.src ,'**/*');
  const defaultSrcOptions = { dot: true, allowEmpty: true };
  const options           = Object.assign(defaultSrcOptions, (TASK_CONFIG.static.srcOptions || {}));

  const paths = {
    src: [
      srcPath,
      projectPath('!' + PATH_CONFIG.src, PATH_CONFIG.static.src, 'README.md'),
      projectPath('!' + PATH_CONFIG.src, PATH_CONFIG.static.src, '.gitkeep')
    ],
    dest: projectPath(PATH_CONFIG.dest, PATH_CONFIG.static.dest)
  }

  return src(paths.src, options)
    .pipe(changed(paths.dest))
    .pipe(dest(paths.dest))
    .pipe(browserSync.stream());
}

task('static', staticTask);
module.exports = staticTask;
