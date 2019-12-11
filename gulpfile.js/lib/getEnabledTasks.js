const compact = require('lodash/compact');
const isEmpty = require('lodash/isEmpty');

// Grouped by what can run in parallel;
const assetTasks = ['static', 'images', 'icons'];
const codeTasks = ['stylesheets', 'html', 'javascripts'];

module.exports = function(env) {

  function matchFilter(task) {
    if(TASK_CONFIG[task]) {
      if(task === 'javascripts') {
        task = env === 'production' ? 'webpack:production' : false;
      }
      return task;
    }
  }

  function exists(value) {
    return !!value;
  }

  function findExistingTasks(candidates) {
    var tasks = compact( candidates.map( matchFilter ).filter( exists ) );

    return isEmpty(tasks) ? false : tasks;
  }

  return {
    assetTasks: findExistingTasks(assetTasks),
    codeTasks: findExistingTasks(codeTasks)
  };
}
