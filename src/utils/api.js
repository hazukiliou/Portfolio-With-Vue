import axios from './axios'

export function token(data) {
	return axios({
		method: 'POST',
		url: '/OAuth/request_token',
		data: data
	})
}