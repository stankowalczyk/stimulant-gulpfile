"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (done) {
  server.listen(_config2.default.serverPort, function () {
    _gulpUtil2.default.log(_gulpUtil2.default.colors.green("Web server started and listening on port " + server.address().port + "."));
    done();
  });
};

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _gulpUtil = require("gulp-util");

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _http2.default.createServer((0, _express2.default)().use(_express2.default.static(_config2.default.buildDir)));