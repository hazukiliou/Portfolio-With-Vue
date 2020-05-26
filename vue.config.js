module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/Portfolio-With-Vue/' : '/',
	devServer: {
		proxy: {
			'/OAuth': {
				target: 'https://www.plurk.com/',
				ws: true,
				changeOrigin: true
			},
		}
	}
}