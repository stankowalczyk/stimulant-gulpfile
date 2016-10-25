import path from "path";
import gulp from "gulp";
import config from "../config";

gulp.task("build-misc", () => {
  return gulp
    .src(path.join(config.sourceDir, config.miscDir, "**", "*"))
    .pipe(gulp.dest(path.join(config.buildDir, config.miscDir)));
});
