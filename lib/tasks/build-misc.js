import gulp from "gulp";
import filter from "gulp-filter";
import config from "../config";

gulp.task("build-misc", () => {
  let imagesFilter = filter("**/*.{ico,gif,jpg,png}", { restore: true });
  let fontsFilter = filter("**/*.{otf,eot,svg,ttf,woff,woff2}", { restore: true });

  return gulp
    .src(config.misc)
    .pipe(imagesFilter)
    .pipe(gulp.dest(`${config.buildDir}/images`))
    .pipe(imagesFilter.restore)
    .pipe(fontsFilter)
    .pipe(gulp.dest(`${config.buildDir}/fonts`))
    .pipe(fontsFilter.restore);
});
