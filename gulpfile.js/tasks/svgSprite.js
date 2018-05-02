if(!TASK_CONFIG.svgSprite) return;

const browserSync = require('browser-sync');
const gulp        = require('gulp');
const svgstore    = require('gulp-svgstore');
const projectPath = require('../lib/projectPath');

const svgSpriteTask = function() {

  const settings = {
    src: projectPath(PATH_CONFIG.src, PATH_CONFIG.icons.src, '*.svg'),
    dest: projectPath(PATH_CONFIG.src, PATH_CONFIG.html.src, PATH_CONFIG.icons.dest)
  };

  return gulp.src(settings.src)
    .pipe(svgstore(TASK_CONFIG.svgSprite.svgstore))
    .pipe(gulp.dest(settings.dest))
    .pipe(browserSync.stream());
};

gulp.task('svgSprite', svgSpriteTask);
module.exports = svgSpriteTask;
