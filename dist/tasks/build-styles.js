"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _gulp2.default.src(_path2.default.join(_config2.default.sourceDir, _config2.default.stylesDir, "index.scss")).pipe((0, _gulpIf2.default)(_config2.default.sourcemaps, _gulpSourcemaps2.default.init())).pipe((0, _gulpSass2.default)().on("error", function (err) {
    if (err.messageFormatted) _gulpUtil2.default.log(_gulpUtil2.default.colors.red(err.messageFormatted));
    _gulpUtil2.default.beep();
    this.emit("end");
  })).pipe((0, _gulpRename2.default)(_config2.default.env + ".css")).pipe((0, _gulpAutoprefixer2.default)({ browsers: ["> 1%"] })).pipe((0, _gulpIf2.default)(_config2.default.minify, (0, _gulpCleanCss2.default)())).pipe((0, _gulpRev2.default)()).pipe((0, _gulpIf2.default)(_config2.default.sourcemaps, _gulpSourcemaps2.default.write("./", { sourceRoot: _path2.default.join("/sourcemaps", _config2.default.sourceDir, _config2.default.stylesDir) }))).pipe(_gulp2.default.dest(_path2.default.join(_config2.default.buildDir, _config2.default.stylesDir)));
};

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _gulp = require("gulp");

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpUtil = require("gulp-util");

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _gulpIf = require("gulp-if");

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _gulpSass = require("gulp-sass");

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _gulpRename = require("gulp-rename");

var _gulpRename2 = _interopRequireDefault(_gulpRename);

var _gulpAutoprefixer = require("gulp-autoprefixer");

var _gulpAutoprefixer2 = _interopRequireDefault(_gulpAutoprefixer);

var _gulpCleanCss = require("gulp-clean-css");

var _gulpCleanCss2 = _interopRequireDefault(_gulpCleanCss);

var _gulpRev = require("gulp-rev");

var _gulpRev2 = _interopRequireDefault(_gulpRev);

var _gulpSourcemaps = require("gulp-sourcemaps");

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }