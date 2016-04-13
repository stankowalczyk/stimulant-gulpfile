import gulp from "gulp";
import gutil from "gulp-util";
import gulpif from "gulp-if";
import uglify from "gulp-uglify";
import rev from "gulp-rev";
import sourcemaps from "gulp-sourcemaps";
import browserify from "browserify";
import babelify from "babelify";
import envify from "envify";
import rememberify from "rememberify";
import babelPluginTransformClassProperties from "babel-plugin-transform-class-properties";
import babelPresetES2015 from "babel-preset-es2015";
import babelPresetReact from "babel-preset-react";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import config from "../config";

export const bundler = browserify({
  entries: `./${config.sourceDir}/${config.scriptsDir}/app.jsx`,
  extensions: [".jsx"],
  cache: {}, // Needed by rememberify.
  debug: true // Needed by gulp-sourcemaps.
}).transform(babelify, {
  plugins: [
    babelPluginTransformClassProperties
  ],
  presets: [
    babelPresetES2015,
    babelPresetReact
  ]
}).transform(envify, {
  NODE_ENV: config.env
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
    .pipe(gulpif(config.rev, rev()))
    .pipe(gulpif(config.sourcemaps, sourcemaps.write("./", { sourceRoot: "/sourcemaps" })))
    .pipe(gulp.dest(`${config.buildDir}/${config.scriptsDir}`));
});
