import gulp from "gulp";
import gutil from "gulp-util";
import gulpif from "gulp-if";
import uglify from "gulp-uglify";
import rev from "gulp-rev";
import sourcemaps from "gulp-sourcemaps";
import browserify from "browserify";
import babelify from "babelify";
import rememberify from "rememberify";
import babelPluginTransformClassProperties from "babel-plugin-transform-class-properties";
import babelPluginTransformDoExpressions from "babel-plugin-transform-do-expressions";
import babelPluginTransformExportExtensions from "babel-plugin-transform-export-extensions";
import babelPluginTransformFunctionBind from "babel-plugin-transform-function-bind";
import babelPluginTransformNodeEnvInline from "babel-plugin-transform-node-env-inline";
import babelPluginTransformObjectRestSpread from "babel-plugin-transform-object-rest-spread";
import babelPresetES2015 from "babel-preset-es2015";
import babelPresetReact from "babel-preset-react";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import config from "../config";

export const bundler = browserify({
  entries: `./${config.sourceDir}/${config.scriptsDir}/index.jsx`,
  extensions: [".jsx"],
  cache: {}, // Needed by rememberify.
  debug: true // Needed by gulp-sourcemaps.
}).transform(babelify, {
  plugins: [
    babelPluginTransformClassProperties,
    babelPluginTransformDoExpressions,
    babelPluginTransformExportExtensions,
    babelPluginTransformFunctionBind,
    [babelPluginTransformNodeEnvInline, { default: config.env }],
    babelPluginTransformObjectRestSpread
  ],
  presets: [
    babelPresetES2015,
    babelPresetReact
  ]
}).plugin(rememberify);

gulp.task("build-scripts", () => {
  return bundler
    .bundle()
    .on("error", function(err) {
      gutil.log(gutil.colors.red(err.message));
      gutil.beep();
      this.emit("end");
    })
    .pipe(source(`${config.env}.js`)) // Convert from Browserify stream to vinyl stream.
    .pipe(buffer()) // Convert from streaming mode to buffered mode.
    .pipe(gulpif(config.sourcemaps, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(config.minify, uglify({ mangle: false })))
    .pipe(rev())
    .pipe(gulpif(config.sourcemaps, sourcemaps.write("./", { sourceRoot: "/sourcemaps" })))
    .pipe(gulp.dest(`${config.buildDir}/${config.scriptsDir}`));
});
