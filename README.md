# stimulant-gulpfile [![NPM version](http://img.shields.io/npm/v/stimulant-gulpfile.svg?style=flat-square)](https://www.npmjs.org/package/stimulant-gulpfile) [![Build status](http://img.shields.io/travis/dstil/stimulant-gulpfile.svg?style=flat-square)](https://travis-ci.org/dstil/stimulant-gulpfile)

The powerful gulpfile used by [stimulant](https://github.com/dstil/stimulant), now available as a standalone NPM package that you can utilize for your own purposes.

## Installation

Install the package with NPM:

```bash
$ npm install stimulant-gulpfile --save-dev
```

## Usage

Inside your `gulpfile.js`, import the package:

```javascript
require("stimulant-gulpfile");
```

Or alternatively, create a symlink:

```bash
$ ln -s node_modules/stimulant-gulpfile/dist/index.js gulpfile.js
```

This will automatically enable the following runnable gulp tasks:

- `watch` — spawn a daemon that performs automatic re-builds whenever files change.
- `build` — build everything.
- `build-index` — build main `index.html` file.
- `build-scripts` — build script files.
- `build-styles` — build stylesheet files.
- `build-images` — build image files.
- `build-fonts` — build font files.
- `build-audio` — build audio files.
- `build-videos` — build video files.
- `build-misc` — build miscellaneous files.
- `check-dependencies` — confirm that all NPM dependencies are installed.
- `clean` — destroy the most recent build.

In other words, it effectively turns your gulpfile into a simple (and powerful) one-liner — no further configuration required!
