//公共js,以及基本方法封装 nvue里使用
const fetch = {
	interfaceUrl: function() {
		//接口地址
		// return "http://39.108.124.252:12000/";
		return 'http://123.207.179.135:3000'
	},
	toast: function(tips) {
		uni.showToast({
			title: tips || "出错啦~",
			icon: 'none',
			duration: 2000
		})
	},
	request: function({
		url,
		method,
		data,
		showLoading
	}) {
		//接口请求
		if (showLoading) {
			uni.showLoading({
				mask: true,
				title: '请稍候...'
			})
		}
		// todo token
		const token = ""
		uni.getStorage({
			key: 'token',
			success: function(res) {
				token = res.data
			}
		});
		// const token = postData.token || "";
		// delete postData["token"]
		const params = {
			data: method === "POST" ? data : JSON.stringify(data)
		}
		return new Promise((resolve, reject) => {
			uni.request({
				url: fetch.interfaceUrl() + url,
				data: method === "POST" ? JSON.stringify(params) : params,
				header: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					"Authorization": token,
					'security': "1"
				},
				method: method, //'GET','POST'
				dataType: 'json',
				success: (res) => {
					showLoading && uni.hideLoading()
					resolve(res.data)
				},
				fail: (res) => {
					fetch.toast("网络不给力，请稍后再试~")
					reject(res)
				}
			})
		})
	}
}

module.exports = {
	request: fetch.request,
	toast: fetch.toast
}
