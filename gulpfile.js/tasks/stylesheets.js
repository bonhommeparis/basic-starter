if(!TASK_CONFIG.stylesheets) return;

const { src, dest, task } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const projectPath = require('../lib/projectPath');
const gulpif = require('gulp-if');
const browserSync  = require('browser-sync');
const handleErrors = require('../lib/handleErrors');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');


const postcss = require('gulp-postcss');
const cssSass = require('@csstools/postcss-sass');
const postcssScss = require('postcss-scss');
const cssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

const stylesheets = () => {

  const paths = {
    src: projectPath(PATH_CONFIG.src, PATH_CONFIG.stylesheets.src, '*.{' + TASK_CONFIG.stylesheets.extensions + '}'),
    dest: projectPath(PATH_CONFIG.dest, PATH_CONFIG.stylesheets.dest)
  };

  const plugins = [
    cssSass(),
    cssPresetEnv(),
    autoprefixer()
  ];

  if(global.production === true) plugins.push(cssnano());

  return src(paths.src)
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(postcss(plugins, {syntax: postcssScss}))
    .on('error', handleErrors)
    .pipe(gulpif(!global.production, sourcemaps.write()))
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(dest(paths.dest))
    .pipe(browserSync.stream());
};

module.exports = stylesheets;
task('stylesheets', stylesheets);
