import should from "should";
import gulp from "gulp";

describe("gulpfile", () => {
  it("should define gulp tasks", function() {
    this.timeout(5000); // Can take a few seconds to load all of the gulp tasks...

    gulp.tasks.should.be.an.Object().and.have.keys();

    require("../lib");

    gulp.tasks.should.be.an.Object().and.have.keys(
      "clean",
      "check-dependencies",
      "build-scripts",
      "build-styles",
      "build-images",
      "build-fonts",
      "build-index",
      "build",
      "watch",
      "default"
    );
  });
});
