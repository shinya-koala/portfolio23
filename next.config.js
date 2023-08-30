/** @type {import('next').NextConfig} */

const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
  publicRuntimeConfig: { branchName },
  images: {
    unoptimized: true,
  },
};

module.exports = {
  experimental: {
    optimizeFonts: true,
  },
};

module.exports = nextConfig;
