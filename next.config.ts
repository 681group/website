import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: 'export',
   // Required for static export on GitHub Pages if you use the Next.js Image component
   images: {
     unoptimized: true,
   },
   // If your repo is https://github.com/User/RepoName, uncomment the line below:
   // basePath: '/RepoName',
   devIndicators: false,
   reactStrictMode: true,


};

export default nextConfig;
