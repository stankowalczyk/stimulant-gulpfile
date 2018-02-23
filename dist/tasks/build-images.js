"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _gulp2.default.src(_path2.default.join(_config2.default.sourceDir, _config2.default.imagesDir, "**", "*.{ico,gif,jpg,png,svg}")).pipe(_gulp2.default.dest(_path2.default.join(_config2.default.buildDir, _config2.default.imagesDir)));
};

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _gulp = require("gulp");

var _gulp2 = _interopRequireDefault(_gulp);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }