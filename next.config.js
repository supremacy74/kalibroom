/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// experimental: {
	// 	appDir: true,
	// },
	images: {
		domains: ['source.unsplash.com', 'random.imagecdn.app'],
	},
}

module.exports = nextConfig
