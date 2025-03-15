const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
});