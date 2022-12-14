/** @type {import('next').NextConfig} */

/**
 * for PWA
 * const withPWA = require('next-pwa');
 * const runtimeCaching = require('next-pwa/cache');
 **/

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: '/course-leap-landing-page',
    images: {
        loader: 'custom',
    },
};

/**
 * NOTE : for PWA
 * module.exports = withPWA({
 *  pwa: {
 *    dest: 'public',
 *    runtimeCaching,
 *   },
 *  ...nextConfig,
 * });
 **/

module.exports = nextConfig;
