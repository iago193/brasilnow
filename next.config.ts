import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s2-g1.glbimg.com",
      },
    ],
  },
};

export default nextConfig;
