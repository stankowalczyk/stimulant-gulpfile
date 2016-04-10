import gulp from "gulp";
import gutil from "gulp-util";
import gulpif from "gulp-if";
import sass from "gulp-sass";
import rename from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rev from "gulp-rev";
import browserSync from "browser-sync";
import config from "../config";

gulp.task("build-styles", () => {
  return gulp
    .src(`${config.sourceDir}/${config.stylesDir}/app.scss`)
    .pipe(sass().on("error", function(err) {
      gutil.log(gutil.colors.red(err.messageFormatted));
      gutil.beep();
      this.emit("end");
    }))
    .pipe(rename(`${config.env.name}.css`))
    .pipe(autoprefixer({ browsers: ["> 1%"] }))
    .pipe(gulpif(config.env.minify, cleanCSS()))
    .pipe(gulpif(config.env.rev, rev()))
    .pipe(gulp.dest(`${config.buildDir}/${config.stylesDir}`))
    .pipe(gulpif(!config.env.rev, browserSync.stream())); // Auto-inject SASS changes into the browser.
});
