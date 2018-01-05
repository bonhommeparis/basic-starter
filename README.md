# Front-End Starter

Basic starter to make HTML website.

## Basic Usage
Make sure Node >=6.3.0 is installed.

#### Install Dependencies
```
yarn
```

#### Configuration
Directory and top level settings are convienently exposed in gulpfile.js/config.json. Use this file to update paths to match the directory structure of your project, and to adjust task options.

#### Start compiling, serving, and watching files
```
yarn start
```

Aliases: `yarn run gulp`


Compile JS via Babel, SCSS, Svg in sprite and inject them in the compiled HTML.

### Build production-ready files
```
yarn run production
```

JS and CSS are uglified and minified, HTML are minified and console give you a file size reporting.


## Special Thanks

- All the gulp tasks are heavily inspired from [Viget gulp-starter](https://github.com/vigetlabs/gulp-starter.git), thanks for their great work.
- Somes mixins are inspired from [Bourbon](http://bourbon.io)

## License

MIT, see [LICENSE.md](LICENSE).
