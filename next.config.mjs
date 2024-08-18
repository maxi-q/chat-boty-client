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
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

export default withMDX(nextConfig)
