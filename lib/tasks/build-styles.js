import gulp from "gulp";
import gutil from "gulp-util";
import gulpif from "gulp-if";
import plumber from "gulp-plumber";
import sass from "gulp-sass";
import rename from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-minify-css";
import rev from "gulp-rev";
import browserSync from "browser-sync";
import config from "../config";

gulp.task("build-styles", () => {
  return gulp
    .src(config.style)
    .pipe(plumber(err => {
      gutil.log(gutil.colors.red(err.message));
      gutil.beep();
    }))
    .pipe(sass())
    .pipe(rename(`${config.env.name}.css`))
    .pipe(autoprefixer({ browsers: ["> 1%"] }))
    .pipe(gulpif(config.env.minify, minifyCSS()))
    .pipe(gulpif(config.env.rev, rev()))
    .pipe(gulp.dest(`${config.buildDir}/styles`))
    .pipe(gulpif(!config.env.rev, browserSync.stream())); // Auto-inject SASS changes into the browser.
});
