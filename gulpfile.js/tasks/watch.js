const {task, watch} = require('gulp');
const path = require('path');
const projectPath = require('../lib/projectPath');

const watchTask = function() {
  const watchableTasks = ['images', 'icons', 'stylesheets', 'static', 'html'];

  function getGlobPattern(extensions) {
    if(extensions) {
      return '**/*' + (extensions.length > 1 ?  '.{' + extensions.join(',') + '}' : '.' + extensions[0]);
    }
    return '';
  }

  function getSrc(taskName, taskConfig) {
    const taskPath = PATH_CONFIG[taskName];
    const srcPath = projectPath(PATH_CONFIG.src, taskPath.src);
    const globPattern = getGlobPattern(taskConfig.extensions);
    return path.join(srcPath, globPattern);
  }

  watchableTasks.forEach(function(taskName) {

    const taskConfig  = TASK_CONFIG[taskName];

    if(taskConfig) {
      const src = getSrc(taskName, taskConfig);
      watch(src, require('./' + taskName));
    }
  });
}

task('watch', watchTask);
