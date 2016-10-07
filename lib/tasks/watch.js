import gulp from "gulp";
import watch from "gulp-watch";
import runSequence from "run-sequence";
import rememberify from "rememberify";
import path from "path";
import config from "../config";
import { Bundler } from "./build-scripts";

gulp.task("watch", ["serve", "reload"], () => {
  return watch(path.join(config.sourceDir, "**", "*"), file => {
    // If a script was changed, purge it from the Browserify cache.
    rememberify.forget(Bundler.get(), file.path);

    runSequence("build", "reload");
  });
});
