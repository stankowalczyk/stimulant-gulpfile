import gulp from "gulp";
import config from "../config";

gulp.task("build-video", () => {
  return gulp
    .src(`${config.sourceDir}/${config.videoDir}/**/*.{avi,mpg}`)
    .pipe(gulp.dest(`${config.buildDir}/${config.videoDir}`));
});
