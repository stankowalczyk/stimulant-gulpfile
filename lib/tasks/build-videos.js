import gulp from "gulp";
import config from "../config";

gulp.task("build-videos", () => {
  return gulp
    .src(`${config.sourceDir}/${config.videosDir}/**/*.{avi,mpg}`)
    .pipe(gulp.dest(`${config.buildDir}/${config.videosDir}`));
});
