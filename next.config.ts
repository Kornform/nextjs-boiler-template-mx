import type { NextConfig } from "next";

/**
 * Static HTML export for hosting outside Vercel (FTP, nginx, S3, etc.).
 * Output: `out/` after `npm run build`.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
