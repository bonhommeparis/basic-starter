const os          = require('os');
const path        = require('path');
const projectPath = require('./projectPath')
const pkg         = require(projectPath('package.json'));

module.exports = {

  /* -------- Javascripts -------- */

  javascripts: {
    extensions: ['js', 'jsx', 'mjs'],
    hot: {
      reload: true,
      noInfo: false,
      quiet: true,
      react: false
    },
    devtool: 'eval-cheap-module-source-map',
    babelLoader: {
      loader: 'babel-loader',
      exclude: /(node_modules)/,
      options: {
        "presets": [
          [
            "@babel/preset-env",
            {
              "useBuiltIns": "entry",
              "corejs": '3.1.4',
              "modules": false
            }
          ]
        ]
      }
    },
    development: {
      definePlugin: {
        'process.env': {
          'DEBUG': true
        }
      }
    },
    production: {
      definePlugin: {
        'process.env': {
          'DEBUG': false
        }
      }
    }
  },

  /* -------- Stylesheets -------- */

  stylesheets: {
    cssnano: {
      zindex: false
    },
    extensions: ['sass', 'scss', 'css']
  },

  /* -------- Html -------- */

  html: {
    datasFile: '_datas/datas.json',
    nunjucksRender: {
      envOptions: {
        watch: false
      },
      manageEnv: require(__dirname + '/../config/nunjucks.config.js')
    },
    htmlmin: {
      collapseWhitespace: true
    },
    excludeFolders: ['_layouts', '_shared', '_macros', '_datas', '_svgs', '_views'],
    extensions: ['html', 'njk', 'json', 'svg']
  },

  /* -------- Images -------- */

  images: {
    extensions: ['jpg', 'png', 'svg', 'gif']
  },

  /* -------- SVG Sprite -------- */

  icons: {
    svgstore: {
      inlineSvg: true
    }
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

