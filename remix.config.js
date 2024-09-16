/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "netlify",
    server: "./server.js",
    ignoredRouteFiles: ["**/.*"],
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    serverBuildPath: "netlify/functions/server.js", // Certifique-se de que este caminho está correto
    publicPath: "/build/",
  };
  