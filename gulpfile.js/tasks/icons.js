if(!TASK_CONFIG.icons) return;

const browserSync = require('browser-sync');
const { src, dest, task } = require('gulp');
const svgstore    = require('gulp-svgstore');
const projectPath = require('../lib/projectPath');

const icons = function() {

  const settings = {
    src: projectPath(PATH_CONFIG.src, PATH_CONFIG.icons.src, '*.svg'),
    dest: projectPath(PATH_CONFIG.src, PATH_CONFIG.html.src, PATH_CONFIG.icons.dest)
  };

  return src(settings.src)
    .pipe(svgstore(TASK_CONFIG.icons.svgstore))
    .pipe(dest(settings.dest))
    .pipe(browserSync.stream());
};

task(icons);
module.exports = icons;
