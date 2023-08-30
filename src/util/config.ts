import getConfig from "next/config";

export function url(filename: string): string {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { branchName: string };
  };
  return publicRuntimeConfig.branchName || "" + filename;
}
