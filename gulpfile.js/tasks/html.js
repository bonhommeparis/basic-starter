if(!TASK_CONFIG.html) return;

const fs           = require('fs');
const data         = require('gulp-data');
const browserSync  = require('browser-sync');
const gulp         = require('gulp');
const render       = require('gulp-nunjucks-render');
const handleErrors = require('../lib/handleErrors');
const projectPath  = require('../lib/projectPath');

const html = function() {

  const exclude = '!' + projectPath(PATH_CONFIG.src, PATH_CONFIG.html.src, '**/{' + TASK_CONFIG.html.excludeFolders.join(',') + '}/**');

  const paths = {
    src: [projectPath(PATH_CONFIG.src, PATH_CONFIG.html.src, '**/*.{' + TASK_CONFIG.html.extensions + '}'), exclude],
    dest: projectPath(PATH_CONFIG.dest, PATH_CONFIG.html.dest)
  };

  const dataFunction = TASK_CONFIG.html.dataFunction || function(file) {
    const dataPath = projectPath(PATH_CONFIG.src, PATH_CONFIG.html.src, TASK_CONFIG.html.datasFile);
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  };

  const nunjucksRenderPath = [ projectPath(PATH_CONFIG.src, PATH_CONFIG.html.src) ];
  TASK_CONFIG.html.nunjucksRender.path = TASK_CONFIG.html.nunjucksRender.path || nunjucksRenderPath;

  return gulp.src(paths.src)
    .pipe(data(dataFunction))
    .on('error', handleErrors)
    .pipe(render(TASK_CONFIG.html.nunjucksRender))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task(html);
module.exports = html;
