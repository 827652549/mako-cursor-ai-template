import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 启用 standalone 输出以支持 Docker 部署
  output: 'standalone',
};

export default nextConfig;
