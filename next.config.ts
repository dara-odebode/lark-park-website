import type { NextConfig } from "next";

const nextConfig: NextConfig = {  
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true,
      },
    ];
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

