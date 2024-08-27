/** @type {import('next').NextConfig} */

import mdx from '@next/mdx'

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
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
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
}

export default withMDX(nextConfig)
