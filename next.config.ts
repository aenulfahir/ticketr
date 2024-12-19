import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "hardy-emu-40.convex.cloud",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
