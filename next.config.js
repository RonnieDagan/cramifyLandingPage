const withMakeswift = require('@makeswift/runtime/next/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://acme.com/blog',
      },
    ]
  },
}

module.exports = withMakeswift(nextConfig)
