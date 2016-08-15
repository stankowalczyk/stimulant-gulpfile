import gulp from "gulp";
import gutil from "gulp-util";
import gulpif from "gulp-if";
import sass from "gulp-sass";
import rename from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rev from "gulp-rev";
import sourcemaps from "gulp-sourcemaps";
import config from "../config";

gulp.task("build-styles", () => {
  return gulp
    .src(`${config.sourceDir}/${config.stylesDir}/index.scss`)
    .pipe(gulpif(config.sourcemaps, sourcemaps.init()))
    .pipe(sass().on("error", function(err) {
      gutil.log(gutil.colors.red(err.messageFormatted));
      gutil.beep();
      this.emit("end");
    }))
    .pipe(rename(`${config.env}.css`))
    .pipe(autoprefixer({ browsers: ["> 1%"] }))
    .pipe(gulpif(config.minify, cleanCSS()))
    .pipe(rev())
    .pipe(gulpif(config.sourcemaps, sourcemaps.write("./", { sourceRoot: `/sourcemaps/${config.sourceDir}/${config.stylesDir}` })))
    .pipe(gulp.dest(`${config.buildDir}/${config.stylesDir}`));
});
