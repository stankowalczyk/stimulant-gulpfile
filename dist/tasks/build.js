"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (done) {
  (0, _runSequence2.default)(["check-dependencies", "build-scripts", "build-styles", "build-images", "build-fonts", "build-audio", "build-videos", "build-misc"], "build-index", done);
};

var _runSequence = require("run-sequence");

var _runSequence2 = _interopRequireDefault(_runSequence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }