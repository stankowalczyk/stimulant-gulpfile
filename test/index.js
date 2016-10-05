import should from "should";
import gulp from "gulp";
import gutil from "gulp-util";
import ls from "list-directory-contents";
import path from "path";
import { config } from "../lib";

describe("gulpfile", () => {
  it("should define gulp tasks", () => {
    gulp.tasks.should.be.an.Object().and.have.keys(
      "clean",
      "check-dependencies",
      "build-scripts",
      "build-styles",
      "build-images",
      "build-fonts",
      "build-audio",
      "build-videos",
      "build-misc",
      "build-index",
      "build",
      "reload",
      "serve",
      "watch",
      "default"
    );
  });

  it("should build the test app successfully", function(done) {
    const appDir = path.join(__dirname, "app");

    process.chdir(appDir); // Tell the gulpfile what to build.

    gutil.log = () => {}; // Suppress the gulpfile's logging.

    this.timeout(5000); // Give the gulpfile enough time to build.

    gulp.start("build", () => {
      ls(path.join(appDir, config.buildDir), (error, files) => {
        let success = (
          !error &&
          files.includes(path.join(appDir, config.buildDir, "index.html")) &&
          files.includes(path.join(appDir, config.buildDir, config.imagesDir, "favicon.ico")) &&
          files.find(file => new RegExp(path.join(appDir, config.buildDir, config.scriptsDir, `${config.env}-([a-f0-9]+)\.js`)).test(file)) &&
          files.find(file => new RegExp(path.join(appDir, config.buildDir, config.stylesDir, `${config.env}-([a-f0-9]+)\.css`)).test(file))
        );

        done(success ? null : new Error("Failed to build."));
      });
    });
  });
});
