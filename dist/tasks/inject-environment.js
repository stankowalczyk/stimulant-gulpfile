"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulpUtil = require("gulp-util");

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _gulpReplace = require("gulp-replace");

var _gulpReplace2 = _interopRequireDefault(_gulpReplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// sample match: #env{SOME_ENVIRONMENT}
var envReplaceRegex = /#env{[a-zA-Z0-9_]+}/g;

function extractEnv(match) {
  return match.substring(5, match.length - 1);
}

function injectEnvironment() {
  return (0, _gulpReplace2.default)(envReplaceRegex, function (match) {
    var env = extractEnv(match);

    if (!process.env[env]) {
      _gulpUtil2.default.log(_gulpUtil2.default.colors.yellow("Warning: Candidate replacement '" + match + "' found in '" + this.file.path + "'" + (" but environment '" + env + "' was not present. Skipping replacement.")));
      return match;
    }

    return process.env[env];
  });
}

exports.default = injectEnvironment;