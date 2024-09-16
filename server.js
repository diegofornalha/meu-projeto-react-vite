import { createRequestHandler } from "@remix-run/netlify";

export const handler = createRequestHandler({
  getLoadContext() {
    // Você pode adicionar dados ao contexto do loader aqui se necessário
  },
  // Se você quiser habilitar o console.log de erros no Netlify, use isso:
  enableCloudWatchLogs: true
});
