import { createRequestHandler } from "@remix-run/netlify";

export const handler = createRequestHandler({
  getLoadContext() {
    // Adicione dados ao contexto do loader, se necessário
  },
  // Se quiser habilitar logs, ative isso
  enableCloudWatchLogs: true
});
