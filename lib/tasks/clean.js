import gulp from "gulp";
import del from "del";
import config from "../config";

gulp.task("clean", done => {
  del(config.buildDir).then(() => done()).catch(error => done(error));
});
