import http from "http";
import gutil from "gulp-util";
import express from "express";
import config from "../config";

const server = http.createServer(express().use(express.static(config.buildDir)));

export default function(done) {
  server.listen(config.serverPort, () => {
    gutil.log(gutil.colors.green(`Web server started and listening on port ${server.address().port}.`));
    done();
  });
}
