import path from "path";
import gulp from "gulp";
import inject from "gulp-inject";
import config from "../config";

gulp.task("build-index", () => {
  return gulp
    .src(path.join(config.sourceDir, "index.html"))
    .pipe(
      inject(
        gulp.src([
          path.join(config.buildDir, config.scriptsDir, "**", "*.js"),
          path.join(config.buildDir, config.stylesDir, "**", "*.css")
        ], { read: false }),
        {
          addRootSlash: false,
          ignorePath: config.buildDir,
          quiet: true,
          removeTags: true
        }
      )
    )
    .pipe(gulp.dest(config.buildDir));
});
