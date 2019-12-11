if( !TASK_CONFIG.javascripts ) return;

const path        = require('path');
const pathToUrl   = require('./pathToUrl');
const webpack     = require('webpack');
const projectPath = require('./projectPath');
const querystring = require('querystring');

module.exports = function(env) {

  const jsSrc       = projectPath(PATH_CONFIG.src, PATH_CONFIG.javascripts.src);
  const jsDest      = projectPath(PATH_CONFIG.dest, PATH_CONFIG.javascripts.dest);
  const publicPath  = pathToUrl(TASK_CONFIG.javascripts.publicPath || PATH_CONFIG.javascripts.dest, '/');

  const nunjucksTemplate = path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.html.src);

  function ensureLeadingDot(string) {
    return string.indexOf('.') === 0 ? string : `.${string}`;
  }

  const extensions = TASK_CONFIG.javascripts.extensions.map(ensureLeadingDot);
  TASK_CONFIG.javascripts.babelLoader.test = TASK_CONFIG.javascripts.babelLoader.test || new RegExp(`(\\${extensions.join('$|')}$)`);

  const webpackConfig = {
    mode: env,
    target: 'web',
    context: jsSrc,
    entry: TASK_CONFIG.javascripts.entry,
    output: {
      path: path.normalize(jsDest),
      filename: '[name].js',
      publicPath: publicPath,
      globalObject: 'self'
    },
    module: {
      rules: [ TASK_CONFIG.javascripts.babelLoader ]
    },
    resolve: {
      extensions: extensions,
      modules: [nunjucksTemplate, 'node_modules']
    },
    plugins: []
  };

  if (TASK_CONFIG.javascripts[env].definePlugin) {
    webpackConfig.plugins.push(new webpack.DefinePlugin(TASK_CONFIG.javascripts[env].definePlugin));
  }

  if (env === 'development') {

    // Create new entry object with webpack-hot-middleware and react-hot-loader (if enabled)
    if (!TASK_CONFIG.javascripts.hot || TASK_CONFIG.javascripts.hot.enabled !== false) {

      for (var key in TASK_CONFIG.javascripts.entry) {
        const entry = [];

        const hotMiddleware = `webpack-hot-middleware/client?${querystring.stringify(TASK_CONFIG.javascripts.hot)}`;

        if (TASK_CONFIG.javascripts.hot.react) entry.push('react-hot-loader/patch');

        TASK_CONFIG.javascripts.entry[key] = entry.concat(hotMiddleware, TASK_CONFIG.javascripts.entry[key]);
      }

      webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    }
  }

  // Add defined plugins and loaders for all environments
  if( TASK_CONFIG.javascripts.plugins ) {
    webpackConfig.plugins = webpackConfig.plugins.concat(TASK_CONFIG.javascripts.plugins(webpack) || []);
  }

  // Add defined rules
  webpackConfig.module.rules = webpackConfig.module.rules.concat(TASK_CONFIG.javascripts.loaders || []);

  // Allow full manipulation of the webpack config
  const { customizeWebpackConfig = w => w } = TASK_CONFIG.javascripts;
  return customizeWebpackConfig(webpackConfig, env, webpack);

};
