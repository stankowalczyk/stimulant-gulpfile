import gulp from "gulp";
import path from "path";
import config from "../config";

gulp.task("build-fonts", () => {
  return gulp
    .src(path.join(config.sourceDir, config.fontsDir, "**", "*.{otf,eot,svg,ttf,woff,woff2}"))
    .pipe(gulp.dest(path.join(config.buildDir, config.fontsDir)));
});
