/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "vercel", // Isso indica para o Remix que ele deve gerar o build para o Vercel
    server: "./server.js", // Caminho para o servidor
    ignoredRouteFiles: ["**/.*"],
  };
  