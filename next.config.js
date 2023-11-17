/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
	//const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
	const repo = 'IE-Dev/ie-dev.github.io'.replace(/.*?\//, '')

	assetPrefix = `https://${repo}/`
	basePath = `/${repo}`
}

const nextConfig = {
	output: 'export',
	assetPrefix: assetPrefix,
	basePath: basePath,
	images: {
		loader: 'custom',
		loaderFile: './cloudinaryLoader.ts',
	}
}

module.exports = nextConfig
