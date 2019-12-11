if(!TASK_CONFIG.images) return;

const gulp             = require('gulp');
const projectPath      = require('../lib/projectPath');
const imagemin         = require('gulp-imagemin');
const browserSync      = require('browser-sync')
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg  = require('imagemin-mozjpeg');

const images = () => {

  const paths = {
    src: projectPath(PATH_CONFIG.src, PATH_CONFIG.images.src, '**/*.{' + TASK_CONFIG.images.extensions + '}'),
    dest: projectPath(PATH_CONFIG.dest, PATH_CONFIG.images.dest)
  };

  return gulp.src([paths.src, '*!README.md'])
    .pipe(imagemin([
      //png
      imageminPngquant({
        speed: 1,
        quality: [0.5, .85]
      }),
      // gif
      imagemin.gifsicle({
        interlaced: true,
        optimizationLevel: 3
      }),
      // jpg
	    imagemin.jpegtran({
        progressive: true
      }),
      //jpg very light lossy, use vs jpegtran
      imageminMozjpeg({
          quality: 85
      })
    ]))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task(images);
module.exports = images;
