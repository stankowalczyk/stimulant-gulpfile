import path from "path";
import gulp from "gulp";
import config from "../config";

export default function() {
  return gulp
    .src(path.join(config.sourceDir, config.videosDir, "**", "*.{avi,mpg}"))
    .pipe(gulp.dest(path.join(config.buildDir, config.videosDir)));
}
