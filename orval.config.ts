import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'https://api-node-nlw-connect.onrender.com/docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'https://api-node-nlw-connect.onrender.com',

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
