const fs           = require('fs');
const projectPath  = require('./projectPath')
const taskDefaults = require('./task-defaults');
const mergeWith    = require('lodash/mergeWith');


const getTaskConfig = function() {

  const defaultConfigPath = projectPath('config/task-config.js');

  if (fs.existsSync(defaultConfigPath)) {
    return require(defaultConfigPath);
  }

  return require('../task-config');
};

const withDefaults = function(taskConfig) {

  Object.keys(taskDefaults).reduce((config, key) => {
    if (taskConfig[key] !== false) {
      // if true, use default, else merge objects
      config[key] = taskDefaults[key] === true ?
                    taskDefaults[key] :
                    mergeWith(taskDefaults[key], config[key] || {}, replaceArrays);
    }
    return config;
  }, taskConfig);

  return taskConfig;
};

const replaceArrays = function(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return srcValue;
  }
};

const taskConfig = withDefaults(getTaskConfig());
module.exports = taskConfig;
