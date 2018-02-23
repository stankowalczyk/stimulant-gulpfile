"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _gulp2.default.src(_path2.default.join(_config2.default.sourceDir, "index.html")).pipe((0, _gulpInject2.default)(_gulp2.default.src([_path2.default.join(_config2.default.buildDir, _config2.default.scriptsDir, "**", "*.js"), _path2.default.join(_config2.default.buildDir, _config2.default.stylesDir, "**", "*.css")], { read: false }), {
    addRootSlash: false,
    ignorePath: _config2.default.buildDir,
    quiet: true,
    removeTags: true
  })).pipe(_gulp2.default.dest(_config2.default.buildDir));
};

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _gulp = require("gulp");

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpInject = require("gulp-inject");

var _gulpInject2 = _interopRequireDefault(_gulpInject);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }