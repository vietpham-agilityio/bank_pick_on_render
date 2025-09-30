export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('RENDER_EXTERNAL_URL', `https://${process.env.RENDER_EXTERNAL_URL}`),
  proxy: true, // <— important when behind Render proxy
});
