import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['api.dicebear.com', 'img.freepik.com','via.placeholder.com'],
  },
};

export default nextConfig;
