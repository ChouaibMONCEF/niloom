/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/((?!Board$|Board/).*)",
        destination: "/Board",
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
