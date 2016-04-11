import gulp from "gulp";
import gutil from "gulp-util";
import config from "./config";
import "./tasks/clean";
import "./tasks/check-dependencies";
import "./tasks/build-scripts";
import "./tasks/build-styles";
import "./tasks/build-images";
import "./tasks/build-fonts";
import "./tasks/build-index";
import "./tasks/build";
import "./tasks/watch";
import "./tasks/default";

gulp.once("start", () => {
  gutil.log(gutil.colors.gray(`Selected environment = ${config.env.name}.`));
});

// Allow env configuration to be overridden.
export function env(env) {
  Object.assign(config.env, env);
}
