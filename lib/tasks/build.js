import gulp from "gulp";
import runSequence from "run-sequence";

gulp.task("build", ["clean"], done => {
  runSequence(
    [
      "check-dependencies",
      "build-scripts",
      "build-styles",
      "build-misc"
    ],
    "build-index",
    done
  );
});
