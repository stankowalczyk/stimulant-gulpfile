import should from "should";
import gulp from "gulp";

describe("react-gulpfile", () => {
  it("should define gulp tasks", () => {
    gulp.tasks.should.have.keys();

    require("../lib");

    gulp.tasks.should.have.keys(
      "clean",
      "check-dependencies",
      "build-scripts",
      "build-styles",
      "build-misc",
      "build-index",
      "build",
      "watch",
      "default"
    );
  });
});
