import gulp from "gulp";
import config from "../config";

gulp.task("build-fonts", () => {
  return gulp
    .src(`${config.sourceDir}/${config.fontsDir}/**/*.{otf,eot,svg,ttf,woff,woff2}`)
    .pipe(gulp.dest(`${config.buildDir}/${config.fontsDir}`));
});
