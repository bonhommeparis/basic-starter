const os   = require('os');
const path = require('path');
const pkg  = require(path.resolve(process.env.PWD, 'package.json'));

module.exports = {
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

  stylesheets: {
    sass: {
      includePaths: [
        './node_modules'
      ]
    },
    extensions: ['sass', 'scss', 'css']
  },

  html: {
    dataFile: '_data/global.json',
    nunjucksRender: {
      envOptions: {
        watch: false
      }
    },
    htmlmin: {
      collapseWhitespace: true
    },
    excludeFolders: ['_layouts', '_shared', '_macros', '_data', '_svgs'],
    extensions: ['html', 'njk', 'json', 'svg']
  },

  images: {
    extensions: ['jpg', 'png', 'svg', 'gif']
  },

  fonts: {
    extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg']
  },

  ghPages: {
    branch: 'gh-pages',
    cacheDir: path.join(os.tmpdir(), pkg.name || 'front-starter')
  },

  svgSprite: {
    svgstore: {}
  },

  production: {
    rev: true
  },

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

