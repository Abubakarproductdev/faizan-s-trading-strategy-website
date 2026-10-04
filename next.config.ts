import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/system",
        destination: "/#system",
        permanent: false,
      },
      {
        source: "/hall-of-fame",
        destination: "/#hall-of-fame",
        permanent: false,
      },
      {
        source: "/page-4",
        destination: "/#deciding-dbd",
        permanent: false,
      },
      {
        source: "/disclaimer",
        destination: "/#disclaimer",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
