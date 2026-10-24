/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: '/Patch-Calculator',
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
