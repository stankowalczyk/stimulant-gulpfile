"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _gulp2.default.src(_config2.default.buildDir).pipe((0, _gulpLivereload2.default)({ quiet: true, start: true }));
};

var _gulp = require("gulp");

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpLivereload = require("gulp-livereload");

var _gulpLivereload2 = _interopRequireDefault(_gulpLivereload);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }