import gulp from "gulp";
import gutil from "gulp-util";
import getWantedDependencies from "get-wanted-dependencies";

gulp.task("check-dependencies", done => {
  getWantedDependencies(process.cwd()).then(wantedDependencies => {
    if (wantedDependencies.length > 0) {
      gutil.log(gutil.colors.red("Wanted dependencies not installed. Run `npm install`."));
      gutil.beep();
      process.exit(1);
    }

    done();
  }).catch(err => done(err));
});
