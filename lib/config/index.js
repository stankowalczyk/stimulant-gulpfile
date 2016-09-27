const config = {
  serverPort: 9000,
  sourceDir: "src",
  buildDir: "dist",
  scriptsDir: "scripts",
  stylesDir: "styles",
  imagesDir: "images",
  fontsDir: "fonts",
  audioDir: "audio",
  videosDir: "videos",
  miscDir: "misc",
  env: process.env.NODE_ENV || "development"
};

Object.assign(config, require(`./${config.env}`).default);

export default config;
