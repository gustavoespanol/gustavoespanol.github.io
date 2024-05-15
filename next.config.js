// eslint-disable-next-line @typescript-eslint/no-var-requires
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

module.exports = withNextIntl(nextConfig);
