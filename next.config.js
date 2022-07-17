/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  build: {
    vendor: ["scrollmagic"],
  },
  plugins: [
    // ssr: false to only include it on client-side
    { src: "~/plugins/scrollmagic.js", ssr: false },
  ],
};

module.exports = nextConfig;
