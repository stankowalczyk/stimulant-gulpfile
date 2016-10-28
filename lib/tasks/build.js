import runSequence from "run-sequence";

export default function(done) {
  runSequence(
    [
      "check-dependencies",
      "build-scripts",
      "build-styles",
      "build-images",
      "build-fonts",
      "build-audio",
      "build-videos",
      "build-misc"
    ],
    "build-index",
    done
  );
}
