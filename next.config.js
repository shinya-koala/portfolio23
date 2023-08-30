/** @type {import('next').NextConfig} */

const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeFonts: true,
  },
};

module.exports = nextConfig;
