/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Tùy chọn: tiện cho deploy dạng standalone (có thể giữ/ bỏ)
  output: 'standalone',

  // Cho phép next/image load ảnh từ backend của bạn
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '3008', pathname: '/**' }, // dev BE
      { protocol: 'https', hostname: '**.innhanh79.vn', pathname: '/**' },        // prod domain(s)
      { protocol: 'http', hostname: '**.innhanh79.vn', pathname: '/**' },        // nếu BE dùng http
    ],
    formats: ['image/avif', 'image/webp'],
    // Nếu host không chạy được image optimizer, mở dòng dưới:
    // unoptimized: true,
  },

  // Giảm lỗi nặng lúc build trên host yếu tài nguyên
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
