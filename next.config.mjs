/** @type {import('next').NextConfig} */

import mdx from '@next/mdx';
import withSvgr from '@svgr/webpack';

const withMDX = mdx()

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.chat-boty.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'chat-boty.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'static.chat-boty.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/client_api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
      {
        source: '/posts/:path/files/preview',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=300',
          },
        ],
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],  // обрабатываем SVG как React-компоненты
    });

    return config;
  },
}
export default withMDX(nextConfig)
