"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (done) {
  (0, _getWantedDependencies2.default)(process.cwd()).then(function (wantedDependencies) {
    if (wantedDependencies.length > 0) {
      _gulpUtil2.default.log(_gulpUtil2.default.colors.red("Wanted dependencies not installed. Run `npm install`."));
      _gulpUtil2.default.beep();
      process.exit(1);
    }

    done();
  }).catch(function (error) {
    return done(error);
  });
};

var _gulpUtil = require("gulp-util");

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _getWantedDependencies = require("get-wanted-dependencies");

var _getWantedDependencies2 = _interopRequireDefault(_getWantedDependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }