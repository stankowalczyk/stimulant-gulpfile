import gulp from "gulp";
import runSequence from "run-sequence";

gulp.task("build", ["clean"], done => {
  runSequence(
    [
      "check-dependencies",
      "build-scripts",
      "build-styles",
      "build-images",
      "build-fonts",
      "build-audio",
      "build-video"
    ],
    "build-index",
    done
  );
});
