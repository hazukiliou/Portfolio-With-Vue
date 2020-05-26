<template>
	<header>
		<div @click="$router.push('about')">
			My BLOG
		</div>
	</header>
</template>

<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/hmac-sha1.js"></script>
<!-- sha256 -->
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/hmac-sha256.js"></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/enc-base64-min.js"></script>
<script src="https://raw.githubusercontent.com/ddo/oauth-1.0a/master/oauth-1.0a.js"></script>

<script>
import { token } from '@/utils/api'
import SHA from 'sha1'
import OAuth from 'oauth-1.0a'

export default {
	created() {
		this.getToken()
	},
	methods: {
		// hash_function(base_string, key) {
		// 	const crypto = require('crypto')

		// 	return crypto
		// 		.createHmac('sha1', key)
		// 		.update(base_string)
		// 		.digest('base64')
		// },
		// getBaseString(request, oauth_data) {
		// 	return 'POST&' + this.percentEncode(this.getBaseUrl('/OAuth/request_token')) + '&' + this.percentEncode(this.getParameterString(request, oauth_data));
		// },
		// getSignature(request, token_secret, oauth_data) {
		// 	return this.hash_function(this.getBaseString(request, oauth_data), this.getSigningKey(token_secret));
		// },
		// getSigningKey(token_secret) {
		// 	token_secret = token_secret || '';

		// 	if(!this.last_ampersand && !token_secret) {
		// 		return this.percentEncode(this.consumer.secret);
		// 	}

		// 	return this.percentEncode(this.consumer.secret) + '&' + this.percentEncode(token_secret);
		// },
		// percentEncode(str) {
		// 	return encodeURIComponent(str)
		// 		.replace(/\!/g, "%21")
		// 		.replace(/\*/g, "%2A")
		// 		.replace(/\'/g, "%27")
		// 		.replace(/\(/g, "%28")
		// 		.replace(/\)/g, "%29");
		// },
		// getBaseUrl(url) {
		// 	return url.split('?')[0];
		// },
		getToken() {
			const request = require('request')
			const OAuth = require('oauth-1.0a')
			const crypto = require('crypto')
			// console.log(SHA(''))

			let oauthData = {
				oauth_consumer_key: 'vMV4qcGKvaWS',
				oauth_consumer_secret: 'aAQetc0TcNXDeZbuNe8EwDdTefcyyzxo',
				oauth_signature_method: 'HMAC-SHA1',
				oauth_nonce: 'gZwxHAR7RbpBftmT4iHReCWz1yVgjhGg',
				oauth_timestamp: '1587485526',
				oauth_version: '1.0'
			}

			let paramArray = new Array()
			for (let key in oauthData) {
				paramArray.push(key + oauthData[key])
			}

			var shaSource = paramArray.join('')
			var sign = crypto
				.createHmac('sha1', 'vMV4qcGKvaWS')
				.update(shaSource)
				.digest('base64')

			console.log(shaSource)
			console.log(sign)

			const formData = new FormData()
			formData.append('oauth_consumer_key', 'vMV4qcGKvaWS')
			formData.append('oauth_consumer_secret', 'aAQetc0TcNXDeZbuNe8EwDdTefcyyzxo')
			formData.append('oauth_signature_method', 'HMAC-SHA1')
			formData.append('oauth_nonce', 'JYhkb7QoWxpnuBUlzLPbFqQxJy5kco0I')
			formData.append('oauth_timestamp', '1587485526')
			formData.append('oauth_version', '1.0')
			formData.append('oauth_signature', sign)
			// formData.append(oauthData)
			token(formData).then(function(res) {
				console.log(res)
			})

			const t = {
				key: 'vMV4qcGKvaWS',
				secret: 'aAQetc0TcNXDeZbuNe8EwDdTefcyyzxo'
			}

			let oauth_data = {
				oauth_consumer_key: 'vMV4qcGKvaWS',
				oauth_nonce: 'ckZeAkKIWegKysLNAjbtnj4nIO7Qn0DP',
				oauth_signature_method: 'HMAC-SHA1',
				oauth_timestamp: '1587485526',
				oauth_version: '1.0'
			}

			const oauth = OAuth({
				consumer: {
					key: 'vMV4qcGKvaWS',
					secret: 'aAQetc0TcNXDeZbuNe8EwDdTefcyyzxo'
				},
				signature_method: 'HMAC-SHA1',
				hash_function(base_string, key) {
					console.log(base_string)
					return crypto
						.createHmac('sha1', key)
						.update(base_string)
						.digest('base64')
				}
			})

			console.log(oauth)

			const request_data = {
				url: 'http://localhost:8080/OAuth/request_token',
				method: 'POST',
				data: { status: 'Hello Ladies + Gentlemen, a signed OAuth request!' }
			}

			// Note: The token is optional for some requests
			// const token = {
			// 	key: '370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb',
			// 	secret: 'LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE'
			// }

			request(
				{
					url: request_data.url,
					method: request_data.method,
					form: oauth.authorize(request_data, token)
				},
				function(error, response, body) {
					console.log(error)
				}
			)
		}
	}
}
</script>

<style lang="scss" scoped>
header {
	width: 100%;
	background: #444444;
	color: #fff;
	height: 60px;
	line-height: 60px;
}
</style>
