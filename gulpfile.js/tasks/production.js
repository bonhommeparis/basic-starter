const gulp            = require('gulp');
const gulpSequence    = require('gulp-sequence');
const getEnabledTasks = require('../lib/getEnabledTasks');

const productionTask = function(cb) {
  global.production = true;

  PATH_CONFIG.finalDest = PATH_CONFIG.dest;
  
  const tasks = getEnabledTasks('production')
  // const rev = TASK_CONFIG.production.rev ? 'rev': false;
  const static = TASK_CONFIG.static ? 'static' : false;
  const { prebuild, postbuild } = TASK_CONFIG.additionalTasks.production;

  gulpSequence('clean', prebuild, tasks.assetTasks, tasks.codeTasks, null, 'size-report', static, postbuild, cb);
}

gulp.task('build', productionTask);
module.exports = productionTask;
