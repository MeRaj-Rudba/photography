/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "pbs.twimg.com"],
  },
  env: {
    API_HOST: "http://localhost:8080",
  },
};

module.exports = nextConfig;
