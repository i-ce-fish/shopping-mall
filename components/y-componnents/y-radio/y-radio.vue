<template>
	<radio-group class="radio-group" :name="validateName">
		<label class="tui-radio" v-for="o of data" :key="o.value">
			<radio :value="o.value" color="#5677fc">{{o.label}}</radio>
		</label>
	</radio-group>
</template>
<script>
	export default {
		components: {},
		data() {
			return {}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		methods: {},
		props: {
			data: {
				type: Array,
				default: () => [],
				required: true
			},
			validateName: {
				type: String,
				default: null,
				required: false
			},
		}
	}
</script>

<style scoped lang="scss">
	.radio-group {
		/*margin-right: auto;*/
		/*transform-origin: 100% center;*/
		/*flex-shrink: 0;*/
		transform: scale(0.8);
		/*  uniapp的radio太大且无法设置大小，使用css缩放来变小，并左移缩小的误差  */
		position: relative;
		left: -30rpx;
	}

	.tui-radio {
		display: inline-block;
		padding-right: 30rpx;
		font-size: 36rpx;
		vertical-align: middle;
	}
</style>
