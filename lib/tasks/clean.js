import del from "del";
import config from "../config";

export default function(done) {
  del(config.buildDir).then(() => done()).catch(error => done(error));
}
