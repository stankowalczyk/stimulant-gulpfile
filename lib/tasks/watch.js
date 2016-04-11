import gulp from "gulp";
import watch from "gulp-watch";
import browserSync from "browser-sync";
import runSequence from "run-sequence";
import rememberify from "rememberify";
import config from "../config";
import {bundler} from "./build-scripts";

gulp.task("watch", ["build"], () => {
  browserSync({
    server: {
      baseDir: config.buildDir
    },
    port: config.serverPort,
    open: false,
    notify: false,
    logFileChanges: false
  });

  return watch(`${config.sourceDir}/**/*`, file => {
    // If a JSX file was changed, purge it from the Browserify cache.
    if (file.extname === ".jsx") {
      rememberify.forget(bundler, file.path);
    }

    runSequence("build", () => {
      // If a non-SASS file was changed, refresh the browser!
      if (file.extname !== ".scss" || config.rev) {
        browserSync.reload();
      }
    });
  });
});
