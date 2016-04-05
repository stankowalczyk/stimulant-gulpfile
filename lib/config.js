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
  environments: [{
    name: "development",
    minify: false,
    rev: false,
    apiUrl: "http://localhost:3000"
  }, {
    name: "production",
    minify: true,
    rev: true,
    apiUrl: "http://localhost:4000"
  }]
};
