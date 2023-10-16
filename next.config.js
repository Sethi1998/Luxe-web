/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "http://18.118.198.144:8000",
        port: '',
        pathname: "",
      },
    ],
  },
};

module.exports = nextConfig;
