/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // disable Image Optimization for static export
  },
};


export default nextConfig;
