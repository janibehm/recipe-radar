/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.istockphoto.com',"img.freepik.com","images.unsplash.com","th.bing.com"]
  },
};

module.exports = nextConfig;