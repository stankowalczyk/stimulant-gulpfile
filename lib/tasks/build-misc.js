import gulp from "gulp";
import config from "../config";

gulp.task("build-misc", () => {
  return gulp
    .src(`${config.sourceDir}/${config.miscDir}/**/*`)
    .pipe(gulp.dest(`${config.buildDir}/${config.miscDir}`));
});
