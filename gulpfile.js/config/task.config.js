module.exports = {

    html        : true,
    images      : true,
    static      : true,
    svgSprite   : true,
    ghPages     : true,
    stylesheets : true,

    javascripts: {
      entry: {
        // files paths are relative to
        // javascripts.dest in path-config.json
        app: ["./main.js"]
      }
    },

    browserSync: {
      server: {
        // should match `dest` in
        // path-config.json
        baseDir: ['public', 'src/static']
      }
    }
  }

