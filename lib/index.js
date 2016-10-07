import gulp from "gulp";
import gutil from "gulp-util";
import config from "./config";
import "./tasks";
export { config, gulp };

gulp.once("start", () => {
  gutil.log(gutil.colors.gray(`Selected environment = ${config.env}.`));
});
