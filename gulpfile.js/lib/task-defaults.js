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
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      options: {
        "presets": [
          [
            "@babel/preset-env",
            {
              "useBuiltIns": "entry"
            }
          ]
        ]
      }
    },
    development: {},
    production: {
      definePlugin: {
        PRODUCTION: JSON.stringify(true)
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

  /* -------- Addtional Tasks -------- */

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

