import gutil from "gulp-util";
import replace from "gulp-replace";

// sample match: #env{SOME_ENVIRONMENT}
const envReplaceRegex = /#env{[a-zA-Z0-9_]+}/;

function extractEnv(match) {
  return match.substring(5, match.length - 1);
}

function injectEnvironment() {
  return replace(envReplaceRegex, function(match) {
    const env = extractEnv(match);

    if (!process.env[env]) {
      gutil.log(gutil.colors.yellow(`Warning: Candidate replacement '${match}' found in '${this.file.path}'`
                                    + ` but environment '${env}' was not present. Skipping replacement.`));
      return match;
    }

    return process.env[env];
  });
}

export default injectEnvironment;
