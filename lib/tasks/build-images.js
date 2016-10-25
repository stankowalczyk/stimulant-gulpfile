import path from "path";
import gulp from "gulp";
import config from "../config";

gulp.task("build-images", () => {
  return gulp
    .src(path.join(config.sourceDir, config.imagesDir, "**", "*.{ico,gif,jpg,png,svg}"))
    .pipe(gulp.dest(path.join(config.buildDir, config.imagesDir)));
});
