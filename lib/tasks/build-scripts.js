import path from "path";
import gulp from "gulp";
import gutil from "gulp-util";
import gulpif from "gulp-if";
import uglify from "gulp-uglify";
import rev from "gulp-rev";
import sourcemaps from "gulp-sourcemaps";
import browserify from "browserify";
import babelify from "babelify";
import rememberify from "rememberify";
import eslintify from "eslintify";
import eslintConfig from "eslint-config-dstil-react";
import babelPluginTransformNodeEnvInline from "babel-plugin-transform-node-env-inline";
import babelPresetES2015 from "babel-preset-es2015";
import babelPresetReact from "babel-preset-react";
import babelPresetStage0 from "babel-preset-stage-0";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import config from "../config";

export default function() {
  return Bundler
    .get()
    .bundle()
    .on("error", function(err) {
      if (err.message) gutil.log(gutil.colors.red(err.message));
      gutil.beep();
      this.emit("end");
    })
    .pipe(source(`${config.env}.js`)) // Convert from Browserify stream to vinyl stream.
    .pipe(buffer()) // Convert from streaming mode to buffered mode.
    .pipe(gulpif(config.sourcemaps, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(config.minify, uglify({ mangle: false })))
    .pipe(rev())
    .pipe(gulpif(config.sourcemaps, sourcemaps.write("./", { sourceRoot: "/sourcemaps" })))
    .pipe(gulp.dest(path.join(config.buildDir, config.scriptsDir)));
}

export class Bundler {
  static get() {
    return this.instance || (this.instance = browserify({
      cache: {}, // Needed by rememberify.
      debug: true, // Needed by gulp-sourcemaps.
      entries: path.join(process.cwd(), config.sourceDir, config.scriptsDir, "index.jsx"),
      extensions: [".jsx"]
    }).transform(eslintify, {
      baseConfig: eslintConfig,
      formatter: "stylish",
      passthrough: "warnings"
    }).transform(babelify, {
      plugins: [
        [babelPluginTransformNodeEnvInline, { default: config.env }],
      ],
      presets: [
        babelPresetES2015,
        babelPresetReact,
        babelPresetStage0
      ]
    }).plugin(rememberify));
  }
}
