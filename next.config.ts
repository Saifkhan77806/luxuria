import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: true,
  transpilePackages: ['@clerk/nextjs'], // THIS is recommended!

};

export default nextConfig;
