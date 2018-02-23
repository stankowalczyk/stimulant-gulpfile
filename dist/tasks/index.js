"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watch = exports.reload = exports.serve = exports.build = exports.buildIndex = exports.buildMisc = exports.buildVideos = exports.buildAudio = exports.buildFonts = exports.buildImages = exports.buildStyles = exports.buildScripts = exports.checkDependencies = exports.clean = undefined;

var _clean2 = require("./clean");

var _clean3 = _interopRequireDefault(_clean2);

var _checkDependencies2 = require("./check-dependencies");

var _checkDependencies3 = _interopRequireDefault(_checkDependencies2);

var _buildScripts2 = require("./build-scripts");

var _buildScripts3 = _interopRequireDefault(_buildScripts2);

var _buildStyles2 = require("./build-styles");

var _buildStyles3 = _interopRequireDefault(_buildStyles2);

var _buildImages2 = require("./build-images");

var _buildImages3 = _interopRequireDefault(_buildImages2);

var _buildFonts2 = require("./build-fonts");

var _buildFonts3 = _interopRequireDefault(_buildFonts2);

var _buildAudio2 = require("./build-audio");

var _buildAudio3 = _interopRequireDefault(_buildAudio2);

var _buildVideos2 = require("./build-videos");

var _buildVideos3 = _interopRequireDefault(_buildVideos2);

var _buildMisc2 = require("./build-misc");

var _buildMisc3 = _interopRequireDefault(_buildMisc2);

var _buildIndex2 = require("./build-index");

var _buildIndex3 = _interopRequireDefault(_buildIndex2);

var _build2 = require("./build");

var _build3 = _interopRequireDefault(_build2);

var _serve2 = require("./serve");

var _serve3 = _interopRequireDefault(_serve2);

var _reload2 = require("./reload");

var _reload3 = _interopRequireDefault(_reload2);

var _watch2 = require("./watch");

var _watch3 = _interopRequireDefault(_watch2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.clean = _clean3.default;
exports.checkDependencies = _checkDependencies3.default;
exports.buildScripts = _buildScripts3.default;
exports.buildStyles = _buildStyles3.default;
exports.buildImages = _buildImages3.default;
exports.buildFonts = _buildFonts3.default;
exports.buildAudio = _buildAudio3.default;
exports.buildVideos = _buildVideos3.default;
exports.buildMisc = _buildMisc3.default;
exports.buildIndex = _buildIndex3.default;
exports.build = _build3.default;
exports.serve = _serve3.default;
exports.reload = _reload3.default;
exports.watch = _watch3.default;