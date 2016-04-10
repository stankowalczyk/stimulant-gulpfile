# stimulant-gulpfile [![NPM version](http://img.shields.io/npm/v/stimulant-gulpfile.svg?style=flat-square)](https://www.npmjs.org/package/stimulant-gulpfile) [![Build status](http://img.shields.io/travis/dstil/stimulant-gulpfile.svg?style=flat-square)](https://travis-ci.org/dstil/stimulant-gulpfile)

The powerful gulpfile used by [stimulant](https://github.com/dstil/stimulant), now available as a standalone NPM package that you can utilize for your own purposes.

## Installation

Install the package with NPM:

```bash
$ npm install stimulant-gulpfile --save-dev
```

## Usage

Inside your `gulpfile.js`, simply import the package:

```javascript
require("stimulant-gulpfile");
```

This will automatically enable the following runnable gulp tasks:

- `watch` — spawn a daemon that performs automatic re-builds whenever files change.
- `build` — build everything.
- `build-index` — build the main `index.html` file.
- `build-fonts` — build the fonts.
- `build-images` — build the images.
- `build-styles` — build the stylesheets.
- `build-scripts` — build the scripts.
- `check-dependencies` — confirm that all NPM dependencies are installed.
- `clean` — destroy the most recent build.

In other words, it effectively turns your gulpfile into a simple (and powerful) one-liner — no further configuration required!
