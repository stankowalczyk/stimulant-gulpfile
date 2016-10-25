import gulp from "gulp";
import livereload from "gulp-livereload";
import config from "../config";

gulp.task("reload", () => {
  return gulp.src(config.buildDir).pipe(livereload({ quiet: true, start: true }));
});
