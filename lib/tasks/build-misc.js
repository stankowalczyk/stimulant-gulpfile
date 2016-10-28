import path from "path";
import gulp from "gulp";
import config from "../config";

export default function() {
  return gulp
    .src(path.join(config.sourceDir, config.miscDir, "**", "*"))
    .pipe(gulp.dest(path.join(config.buildDir, config.miscDir)));
}
