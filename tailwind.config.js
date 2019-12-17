// See https://tailwindcss.com/docs/configuration for details
const toTailwind = require('@theme-ui/tailwind');
const theme = require('./theme');
const tailwindConfig = toTailwind(theme);

module.exports = tailwindConfig;
