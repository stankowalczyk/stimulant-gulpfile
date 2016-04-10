export default {
  serverPort: 9000,
  sourceDir: "src",
  buildDir: "dist",
  scriptsDir: "scripts",
  stylesDir: "styles",
  imagesDir: "images",
  fontsDir: "fonts",
  env: require(`./${process.env.NODE_ENV || "development"}`).default
};
