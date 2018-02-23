"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gulp = exports.config = undefined;

var _gulp = require("gulp");

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpUtil = require("gulp-util");

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _tasks = require("./tasks");

var tasks = _interopRequireWildcard(_tasks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_gulp2.default.task("clean", tasks.clean);
_gulp2.default.task("check-dependencies", tasks.checkDependencies);
_gulp2.default.task("build-scripts", tasks.buildScripts);
_gulp2.default.task("build-styles", tasks.buildStyles);
_gulp2.default.task("build-images", tasks.buildImages);
_gulp2.default.task("build-fonts", tasks.buildFonts);
_gulp2.default.task("build-audio", tasks.buildAudio);
_gulp2.default.task("build-videos", tasks.buildVideos);
_gulp2.default.task("build-misc", tasks.buildMisc);
_gulp2.default.task("build-index", tasks.buildIndex);
_gulp2.default.task("build", ["clean"], tasks.build);
_gulp2.default.task("serve", ["build"], tasks.serve);
_gulp2.default.task("reload", tasks.reload);
_gulp2.default.task("watch", ["serve", "reload"], tasks.watch);
_gulp2.default.task("default", ["build"]);

_gulp2.default.once("start", function () {
  _gulpUtil2.default.log(_gulpUtil2.default.colors.gray("Selected environment = " + _config2.default.env + "."));
});

exports.config = _config2.default;
exports.gulp = _gulp2.default;