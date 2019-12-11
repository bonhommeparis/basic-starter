
const gulp = require('gulp');
const getEnabledTasks = require('./lib/getEnabledTasks');
const HubRegistry = require('gulp-hub');

// Globally expose config objects
global.PATH_CONFIG = require('./config/path.config.json');
global.TASK_CONFIG = require('./lib/get-task-config');

// Tell gulp to use the tasks just loaded
const hub = new HubRegistry(['tasks/*.js']);
gulp.registry(hub);

// _______________________________________________________ Dev

const tasks = getEnabledTasks('watch');
exports.default = gulp.series('clean', gulp.parallel(tasks.assetTasks), gulp.parallel(tasks.codeTasks), gulp.parallel('browserSync', 'watch'));


// _______________________________________________________ Production
const prodTasks = getEnabledTasks('production');
const initProd = (cb) => {
    global.production = true;
    global.pagesProd = true;
    cb();
};

const production = gulp.series(initProd, 'clean', gulp.parallel(prodTasks.assetTasks),  gulp.parallel(prodTasks.codeTasks), 'size-report');
exports.production = production;
