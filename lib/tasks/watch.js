import path from "path";
import gutil from "gulp-util";
import watch from "gulp-watch";
import runSequence from "run-sequence";
import rememberify from "rememberify";
import config from "../config";
import { Bundler } from "./build-scripts";

let isRebuilding;

export default function() {
  return watch(path.join(config.sourceDir, "**", "*"), file => {
    // A file was changed! Purge it from the Browserify cache.
    rememberify.forget(Bundler.get(), file.path);

    // Perform a rebuild (if one isn't already in progress).
    if (isRebuilding) {
      gutil.log(gutil.colors.yellow("A file change was detected, but a rebuild is currently occurring! It will be incorporated into the next rebuild."));
    } else {
      isRebuilding = true;
      runSequence("build", "reload", () => isRebuilding = false);
    }
  });
}
