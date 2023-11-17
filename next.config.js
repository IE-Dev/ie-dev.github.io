/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		loader: 'custom',
		loaderFile: './cloudinaryLoader.ts',
	},
}

module.exports = nextConfig
