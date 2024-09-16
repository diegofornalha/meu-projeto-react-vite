/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "netlify", // Alvo para Netlify
    server: "./server.js", // Caminho para o servidor personalizado
    ignoredRouteFiles: ["**/.*"],
    appDirectory: "app",
    assetsBuildDirectory: "public/build", // Diretório correto de assets
    serverBuildPath: "netlify/functions/server.js", // Caminho do build do servidor
    publicPath: "/build/", // Caminho público para assets
  };
              