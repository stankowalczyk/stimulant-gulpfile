import gulp from "gulp";
import gutil from "gulp-util";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import uglify from "gulp-uglify";
import rev from "gulp-rev";
import browserify from "browserify";
import babelify from "babelify";
import rememberify from "rememberify";
import babelPluginTransformClassProperties from "babel-plugin-transform-class-properties";
import babelPresetES2015 from "babel-preset-es2015";
import babelPresetReact from "babel-preset-react";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import config from "../config";

export const bundler = browserify({
  entries: `./${config.script}`,
  extensions: [".jsx"],
  cache: {}
}).transform(babelify, {
  plugins: [
    babelPluginTransformClassProperties
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
    .pipe(source(`${config.env.name}.js`)) // Convert from Browserify stream to vinyl stream.
    .pipe(buffer()) // Convert from streaming mode to buffered mode.
    .pipe(replace("$ENV", JSON.stringify(config.env)))
    .pipe(gulpif(config.env.minify, uglify({ mangle: false })))
    .pipe(gulpif(config.env.rev, rev()))
    .pipe(gulp.dest(`${config.buildDir}/scripts`));
});
