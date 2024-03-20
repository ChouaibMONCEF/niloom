/** @type {import('next').NextConfig} */
const nextConfig = {
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
