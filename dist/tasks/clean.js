"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (done) {
  (0, _del2.default)(_config2.default.buildDir).then(function () {
    return done();
  }).catch(function (error) {
    return done(error);
  });
};

var _del = require("del");

var _del2 = _interopRequireDefault(_del);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }