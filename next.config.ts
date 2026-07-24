import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servicios",
        destination: "/marketingdigital",
        permanent: true,
      },
      {
        source: "/quien-soy",
        destination: "/nosotros",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
