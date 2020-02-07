import request from '@/utils/request.js'

export function login(data) {
	return request({
		url: '/api/auth/login',
		method: 'POST',
		data:data
	})
}
