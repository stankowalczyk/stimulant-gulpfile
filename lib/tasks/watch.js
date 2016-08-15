import gulp from "gulp";
import watch from "gulp-watch";
import runSequence from "run-sequence";
import rememberify from "rememberify";
import config from "../config";
import { bundler } from "./build-scripts";

gulp.task("watch", ["serve", "reload"], () => {
  return watch(`${config.sourceDir}/**/*`, file => {
    // If a script was changed, purge it from the Browserify cache.
    rememberify.forget(bundler, file.path);

    runSequence("build", "reload");
  });
});
