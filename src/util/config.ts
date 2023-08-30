const nextConfig = require("@/../next.config");

export function url(filename: string): string {
  const { basePath = "" } = nextConfig;
  return basePath + filename;
}
