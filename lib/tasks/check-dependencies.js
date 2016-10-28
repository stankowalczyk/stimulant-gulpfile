import gutil from "gulp-util";
import getWantedDependencies from "get-wanted-dependencies";

export default function(done) {
  getWantedDependencies(process.cwd()).then(wantedDependencies => {
    if (wantedDependencies.length > 0) {
      gutil.log(gutil.colors.red("Wanted dependencies not installed. Run `npm install`."));
      gutil.beep();
      process.exit(1);
    }

    done();
  }).catch(error => done(error));
}
