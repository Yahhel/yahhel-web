import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui", "@repo/api"],
  /* config options here */
};

export default nextConfig;
