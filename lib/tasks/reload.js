import gulp from "gulp";
import livereload from "gulp-livereload";
import config from "../config";

gulp.task("reload", () => {
  return gulp.src(config.buildDir).pipe(livereload({ start: true, quiet: true }));
});
