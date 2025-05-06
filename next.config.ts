import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        }
      },
      treeShaking: true,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: '*'
      }
    ],
  },
  sassOptions: {
    additionalData: `
      $contrast_color: #e2e8f0;
      $text_color: #8b9bbb;
    `
  }
  /* config options here */
};

export default nextConfig;
