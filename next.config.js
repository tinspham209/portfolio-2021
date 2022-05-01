/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://tinspham.dev/'
  },
  trailingSlash: true
}
