const config = {
  audioDir: "audio",
  buildDir: "dist",
  env: process.env.NODE_ENV || "development",
  fontsDir: "fonts",
  imagesDir: "images",
  miscDir: "misc",
  scriptsDir: "scripts",
  serverPort: 9000,
  sourceDir: "src",
  stylesDir: "styles",
  videosDir: "videos"
};

Object.assign(config, require(`./${config.env}`).default);

export default config;
