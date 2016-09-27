import gulp from "gulp";
import inject from "gulp-inject";
import config from "../config";

gulp.task("build-index", () => {
  return gulp
    .src(`${config.sourceDir}/index.html`)
    .pipe(
      inject(
        gulp.src([
          `${config.buildDir}/${config.scriptsDir}/**/*.js`,
          `${config.buildDir}/${config.stylesDir}/**/*.css`
        ], {
          read: false
        }), {
          ignorePath: config.buildDir,
          addRootSlash: false,
          removeTags: true,
          quiet: true
        }
      )
    )
    .pipe(gulp.dest(config.buildDir));
});
