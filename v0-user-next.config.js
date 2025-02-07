/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr", "ar"],
    defaultLocale: "en",
    localeDetection: true,
  },
}

module.exports = nextConfig

