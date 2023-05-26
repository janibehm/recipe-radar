/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.istockphoto.com',"img.freepik.com","images.unsplash.com","th.bing.com","images.pexels.com","https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
  },
};

module.exports = nextConfig;