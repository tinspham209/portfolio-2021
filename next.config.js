/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://tinspham.dev/',
    domains: ['firebasestorage.googleapis.com']
  },
  trailingSlash: true
}
