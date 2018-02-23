"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _gulpWatch2.default)(_path2.default.join(_config2.default.sourceDir, "**", "*"), function (file) {
    // A file was changed! Purge it from the Browserify cache.
    _rememberify2.default.forget(_buildScripts.Bundler.get(), file.path);

    // Perform a rebuild (if one isn't already in progress).
    if (isRebuilding) {
      _gulpUtil2.default.log(_gulpUtil2.default.colors.yellow("A file change was detected, but a rebuild is currently occurring! It will be incorporated into the next rebuild."));
    } else {
      isRebuilding = true;
      (0, _runSequence2.default)("build", "reload", function () {
        return isRebuilding = false;
      });
    }
  });
};

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _gulpUtil = require("gulp-util");

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _gulpWatch = require("gulp-watch");

var _gulpWatch2 = _interopRequireDefault(_gulpWatch);

var _runSequence = require("run-sequence");

var _runSequence2 = _interopRequireDefault(_runSequence);

var _rememberify = require("rememberify");

var _rememberify2 = _interopRequireDefault(_rememberify);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _buildScripts = require("./build-scripts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRebuilding = void 0;