"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ENV_RESOLUTION = {
  "master": "development",
  "development": "development",
  "staging": "staging",
  "staging-internal": "staging",
  "staging-external": "staging",
  "production": "production"
};

// Development env if not specified
var nodeEnv = process.env.NODE_ENV || "development";

// Assume production if env specified but not supported
var env = ENV_RESOLUTION.hasOwnProperty(nodeEnv) ? ENV_RESOLUTION[nodeEnv] : "production";

var config = {
  audioDir: "audio",
  buildDir: "dist",
  env: env,
  fontsDir: "fonts",
  imagesDir: "images",
  miscDir: "misc",
  scriptsDir: "scripts",
  serverPort: process.env.GULP_PORT || 9000,
  sourceDir: "src",
  stylesDir: "styles",
  videosDir: "videos"
};

Object.assign(config, require("./" + config.env).default);

exports.default = config;