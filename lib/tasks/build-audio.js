import path from "path";
import gulp from "gulp";
import config from "../config";

gulp.task("build-audio", () => {
  return gulp
    .src(path.join(config.sourceDir, config.audioDir, "**", "*.{mp3,wav}"))
    .pipe(gulp.dest(path.join(config.buildDir, config.audioDir)));
});
