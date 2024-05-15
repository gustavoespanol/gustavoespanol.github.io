/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntlConfig({
  eslint: {
    dirs: ['.'],
  },
  output: "export",
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config) => {
    // config.externals is needed to resolve the following errors:
    // Module not found: Can't resolve 'bufferutil'
    // Module not found: Can't resolve 'utf-8-validate'
    config.externals.push({
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    });

    return config;
  },
});

export default nextConfig;
