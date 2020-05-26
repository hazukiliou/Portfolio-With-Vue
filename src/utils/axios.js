import axios from 'axios'

const instance = axios.create({
	timeout: 5000,
	headers: { 'Content-Type': 'application/json; charset=UTF-8' }
})

// instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

instance.interceptors.request.use(
	config => {
		// config.headers.access_token = 'Req3bolvU5Kh'
		// config.data['form_token'] = "$1$a6c83b57114a61d4376a911250567b9ff5609e4ae3a9cb4ce257014ac665558a@q6xkif"
		// config.data.oauth_consumer_key = 'vMV4qcGKvaWS'
		// config.data['oauth_consumer_key'] = 'vMV4qcGKvaWS'
		config.data['oauth_signature_method'] = 'HMAC-SHA1'
		config.headers['oauth_signature_method'] = 'HMAC-SHA1'
		// config.data['oauth_consumer_secret'] = 'aAQetc0TcNXDeZbuNe8EwDdTefcyyzxo'
		// config.data['oauth_version'] = '1.0'
		config.data['oauth_signature'] = 'oJo19uT6zoGuuZvNXYN5IeYiOOA%3D'
		config.headers['oauth_signature'] = 'oJo19uT6zoGuuZvNXYN5IeYiOOA%3D'
		console.log(config)
		// 每次发送请求之前判断vuex中是否存在token        
		// 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
		// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
		// const token = store.state.token;        
		// token && (config.headers.Authorization = token);        
		return config;
	},
	error => {
		return Promise.error(error);
	})

instance.interceptors.response.use(
	response => {
		if (response.status === 200) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	error => {
		return Promise.reject(error.response);
	})

export default instance