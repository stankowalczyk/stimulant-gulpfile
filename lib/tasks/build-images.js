import gulp from "gulp";
import config from "../config";

gulp.task("build-images", () => {
  return gulp
    .src(`${config.sourceDir}/${config.imagesDir}/**/*.{ico,gif,jpg,png}`)
    .pipe(gulp.dest(`${config.buildDir}/${config.imagesDir}`));
});
