import gulp from "gulp";
import gutil from "gulp-util";
import config from "./config";
import * as tasks from "./tasks";

gulp.task("clean", tasks.clean);
gulp.task("check-dependencies", tasks.checkDependencies);
gulp.task("build-scripts", tasks.buildScripts);
gulp.task("build-styles", tasks.buildStyles);
gulp.task("build-images", tasks.buildImages);
gulp.task("build-fonts", tasks.buildFonts);
gulp.task("build-audio", tasks.buildAudio);
gulp.task("build-videos", tasks.buildVideos);
gulp.task("build-misc", tasks.buildMisc);
gulp.task("build-index", tasks.buildIndex);
gulp.task("build", ["clean"], tasks.build);
gulp.task("serve", ["build"], tasks.serve);
gulp.task("reload", tasks.reload);
gulp.task("watch", ["serve", "reload"], tasks.watch);
gulp.task("default", ["build"]);

gulp.once("start", () => {
  gutil.log(gutil.colors.gray(`Selected environment = ${config.env}.`));
});

export { config, gulp };
