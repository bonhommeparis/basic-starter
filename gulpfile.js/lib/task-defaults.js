const os          = require('os');
const path        = require('path');
const projectPath = require('./projectPath')
const pkg         = require(projectPath('package.json'));

module.exports = {

  /* -------- Javascripts -------- */

  javascripts: {
    extensions: ['js', 'jsx'],
    hot: {
      reload: true,
      noInfo: false,
      quiet: true,
      react: false
    },
    devtool: 'eval-cheap-module-source-map',
    babelLoader: {
      // "test" is derived from TASK_CONFIG.javascripts.extensions
      // "options" is derived from TASK_CONFIG.javascripts.babel
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    babel: {
      presets: [
        [
          "env",
          {
            "targets": {
              "browsers": [
                "last 2 versions",
                "ie >= 10"
              ]
            }
          }
        ]
      ]
    },
    development: {},
    production: {
      devtool: false,
      uglifyJsPlugin: {
        mangle: {
          keep_fnames: true
        }
      },
      definePlugin: {
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }
    }
  },

  /* -------- Stylesheets -------- */

  stylesheets: {
    sass: {
      includePaths: [
        './node_modules'
      ]
    },
    extensions: ['sass', 'scss', 'css']
  },

  /* -------- Html -------- */

  html: {
    dataFile: '_data/development.json',
    dataFileProd: '_data/production.json',
    nunjucksRender: {
      envOptions: {
        watch: false
      },
      manageEnv: require(__dirname + '/nunjucks.config.js')
    },
    htmlmin: {
      collapseWhitespace: true
    },
    excludeFolders: ['_layouts', '_shared', '_macros', '_data', '_svgs'],
    extensions: ['html', 'njk', 'json', 'svg']
  },

  /* -------- Images -------- */

  images: {
    extensions: ['jpg', 'png', 'svg', 'gif']
  },

  /* -------- Fonts -------- */

  fonts: {
    extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg']
  },

  /* -------- Gh Pages -------- */

  ghPages: {
    branch: 'gh-pages',
    cacheDir: path.join(os.tmpdir(), pkg.name || 'basic-starter')
  },

  /* -------- SVG Sprite -------- */

  svgSprite: {
    svgstore: {}
  },

  /* -------- Production -------- */

  production: {
    rev: false
  },

  /* -------- Stylesheets -------- */

  additionalTasks: {
    initialize(gulp, PATH_CONFIG, TASK_CONFIG) {
      // gulp.task('myTask', function() { })
    },
    development: {
      prebuild: null,
      postbuild: null
    },
    production: {
      prebuild: null,
      postbuild: null
    }
  }
};

