<template>
	<view class="tui-searchbox">
		<view class="tui-rolling-search tui-flex tui-align-between">
			<view class="tui-icon-box  tui-flex tui-flex-1">
				<view>
					<tui-icon name="search" :size='16' color='#999'>
					</tui-icon>
				</view>
				<input class="tui-input " type="text" value="" :placeholder="placeholder" />
			</view>
			<view class="tui-icon-box" v-if="showScan">
				<tui-icon name="sweep" :size='16' color='#999' @tap="scan"></tui-icon>
			</view>
		</view>
		<tui-button class="btn" width="120rpx" height="60rpx" shape="circle" type="blue">搜索</tui-button>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"

	export default {
		props: {
			placeholder: {type: String, default: "扫码/输入", required: false},
			showScan: {type: [String,Boolean], default: true, required: false}
		},

		components: {
			tuiIcon
		},
		data() {
			return {};
		},
		methods: {
			scan() {
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				})
			}
		},


	}
</script>

<style lang="scss">
	.tui-searchbox {
		display: flex;
		padding: 16rpx 20rpx;
		box-sizing: border-box;
	}

	.tui-rolling-search {
		flex: 1;

		width: 100%;
		height: 60rpx;
		border-radius: 35rpx;
		padding: 0 40rpx 0 30rpx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		color: #999;
	}

	.tui-input {
		flex: 1;
		color: #333;
		padding: 0 16upx;
	}

	.btn{
		margin-left: 30rpx;
	}
</style>
