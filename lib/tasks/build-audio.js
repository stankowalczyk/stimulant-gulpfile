import gulp from "gulp";
import config from "../config";

gulp.task("build-audio", () => {
  return gulp
    .src(`${config.sourceDir}/${config.audioDir}/**/*.{mp3,wav}`)
    .pipe(gulp.dest(`${config.buildDir}/${config.audioDir}`));
});
