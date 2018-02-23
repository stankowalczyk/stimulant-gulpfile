"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bundler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return Bundler.get().bundle().on("error", function (err) {
    if (err.message) _gulpUtil2.default.log(_gulpUtil2.default.colors.red(err.message));
    _gulpUtil2.default.beep();
    this.emit("end");
  }).pipe((0, _vinylSourceStream2.default)(_config2.default.env + ".js")) // Convert from Browserify stream to vinyl stream.
  .pipe((0, _vinylBuffer2.default)()) // Convert from streaming mode to buffered mode.
  .pipe((0, _injectEnvironment2.default)()) // Replace templated #env{var} vars.
  .pipe((0, _gulpIf2.default)(_config2.default.sourcemaps, _gulpSourcemaps2.default.init({ loadMaps: true }))).pipe((0, _gulpIf2.default)(_config2.default.minify, (0, _gulpUglify2.default)({ mangle: false }))).pipe((0, _gulpRev2.default)()).pipe((0, _gulpIf2.default)(_config2.default.sourcemaps, _gulpSourcemaps2.default.write("./", { sourceRoot: "/sourcemaps" }))).pipe(_gulp2.default.dest(_path2.default.join(_config2.default.buildDir, _config2.default.scriptsDir)));
};

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _gulp = require("gulp");

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpUtil = require("gulp-util");

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _gulpIf = require("gulp-if");

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _gulpUglify = require("gulp-uglify");

var _gulpUglify2 = _interopRequireDefault(_gulpUglify);

var _gulpRev = require("gulp-rev");

var _gulpRev2 = _interopRequireDefault(_gulpRev);

var _gulpSourcemaps = require("gulp-sourcemaps");

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _browserify = require("browserify");

var _browserify2 = _interopRequireDefault(_browserify);

var _babelify = require("babelify");

var _babelify2 = _interopRequireDefault(_babelify);

var _rememberify = require("rememberify");

var _rememberify2 = _interopRequireDefault(_rememberify);

var _eslintify = require("eslintify");

var _eslintify2 = _interopRequireDefault(_eslintify);

var _eslintConfigDstilReact = require("eslint-config-dstil-react");

var _eslintConfigDstilReact2 = _interopRequireDefault(_eslintConfigDstilReact);

var _babelPluginTransformNodeEnvInline = require("babel-plugin-transform-node-env-inline");

var _babelPluginTransformNodeEnvInline2 = _interopRequireDefault(_babelPluginTransformNodeEnvInline);

var _babelPresetEs = require("babel-preset-es2015");

var _babelPresetEs2 = _interopRequireDefault(_babelPresetEs);

var _babelPresetReact = require("babel-preset-react");

var _babelPresetReact2 = _interopRequireDefault(_babelPresetReact);

var _babelPresetStage = require("babel-preset-stage-0");

var _babelPresetStage2 = _interopRequireDefault(_babelPresetStage);

var _vinylSourceStream = require("vinyl-source-stream");

var _vinylSourceStream2 = _interopRequireDefault(_vinylSourceStream);

var _vinylBuffer = require("vinyl-buffer");

var _vinylBuffer2 = _interopRequireDefault(_vinylBuffer);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _injectEnvironment = require("./inject-environment");

var _injectEnvironment2 = _interopRequireDefault(_injectEnvironment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bundler = exports.Bundler = function () {
  function Bundler() {
    _classCallCheck(this, Bundler);
  }

  _createClass(Bundler, null, [{
    key: "get",
    value: function get() {
      return this.instance || (this.instance = (0, _browserify2.default)({
        cache: {}, // Needed by rememberify.
        debug: true, // Needed by gulp-sourcemaps.
        entries: _path2.default.join(process.cwd(), _config2.default.sourceDir, _config2.default.scriptsDir, "index.jsx"),
        extensions: [".jsx"]
      }).transform(_eslintify2.default, {
        baseConfig: _eslintConfigDstilReact2.default,
        formatter: "stylish",
        passthrough: "warnings"
      }).transform(_babelify2.default, {
        plugins: [[_babelPluginTransformNodeEnvInline2.default, { default: _config2.default.env }]],
        presets: [_babelPresetEs2.default, _babelPresetReact2.default, _babelPresetStage2.default]
      }).plugin(_rememberify2.default));
    }
  }]);

  return Bundler;
}();