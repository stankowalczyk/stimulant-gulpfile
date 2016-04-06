export default {
  serverPort: 9000,
  sourceDir: "src",
  buildDir: "dist",
  index: "src/index.html",
  script: "src/scripts/app.jsx",
  style: "src/styles/app.scss",
  misc: [
    "node_modules/font-awesome/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}",
    "src/images/**/*.{ico,gif,jpg,png}"
  ],
  env: require(`./${process.env.NODE_ENV || "development"}`).default
};
