// 参数： url:请求地址  param：请求参数  way：请求方式 callBack：回调函数
async function urlRequest(req) {
	const ServerIP = 'http://123.207.179.135:3000'

	req.url = req.url.replace('/api','')

	// let baseParam = {
	// 	deviceId: "",
	// 	os: "ios",
	// 	ip: '192.168.1.35',
	// 	versionName: "1.1.0",
	// 	version: "",
	// 	pageNum: "",
	// 	pageSize: "",
	// 	appName: "hfp",
	// 	userId: "123"
	// }

	let token = "";

	uni.getStorage({
		key: 'token',
		success: function(res) {
			token = res.data
		}
	});

	const res = await uni.request({
		url: ServerIP + req.url, //仅为示例，并非真实接口地址。
		// data: JSON.stringify(Object.assign(param, baseParam)),
		header: {
			"Authorization": token,
			'Accept': 'application/json'
			// 'Content-Type': 'application/json', 
			//自定义请求头信息
		},
		method: req.method,
		timeout: 5000,
		data: req.data
	});
	
	console.warn("response", res)
	
	// 统一响应处理
	if (res[1].data.code === 200) {
		return res[1].data
	} else {
		// todo 异常处理
		return res
	}



}

export default urlRequest
