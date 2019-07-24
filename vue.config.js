// vue.config.js
module.exports = {
  publicPath: "",
  css: {
    loaderOptions: {
      sass: {
        data: process.env.TYPE === "PAGES" ? "$env: 'pages';" : "$env: 'production';"
      }
    }
  }
};
