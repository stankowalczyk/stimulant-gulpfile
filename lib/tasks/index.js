import gulp from "gulp";
import "./clean";
import "./check-dependencies";
import "./build-scripts";
import "./build-styles";
import "./build-images";
import "./build-fonts";
import "./build-audio";
import "./build-videos";
import "./build-misc";
import "./build-index";
import "./build";
import "./serve";
import "./reload";
import "./watch";

gulp.task("default", ["build"]);
