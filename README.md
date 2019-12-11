# Basic Starter

Basic starter for front-end projects.

## Requirements

| Prerequisite    | How to check  | How to install                   |
| --------------- | ------------- | -------------------------------- |
| Node.js 8.10.9  | `node -v`     | [nodejs.org](https://nodejs.org) |
| NPM 6.10.3      | `npm -v`      | [nodejs.org](https://nodejs.org) |

## Getting started
```
npm
```

or

```
yarn
```

### Configuration
Directory and top level settings are convienently exposed in gulpfile.js/config.json. Use this file to update paths to match the directory structure of your project, and to adjust task options.

### Start compiling, serving, and watching files
```
npm start
```

Aliases: `yarn run gulp`


Compile JS via Babel, SCSS, Svg in sprite and inject them in the compiled HTML.

### Build production-ready files
```
npm run prod
```

JS and CSS are uglified and minified, HTML are minified and console give you a file size reporting.

## HTML

## CSS

## Javascript

## Special Thanks

- All the gulp tasks are heavily inspired from [Viget gulp-starter](https://github.com/vigetlabs/gulp-starter.git), thanks for their great work.
- Somes mixins are inspired from [Bourbon](http://bourbon.io)

## License

MIT, see [LICENSE.md](LICENSE).
