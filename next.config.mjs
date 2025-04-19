// next.config.mjs
import withPWA from 'next-pwa'

const nextConfig = {
  reactStrictMode: true,
 // swcMinify: true,
  // 👇 Needed for production-ready serverless hosting (Vercel)
  output: 'standalone',
}

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // disable PWA during dev to avoid issues
})(nextConfig)
