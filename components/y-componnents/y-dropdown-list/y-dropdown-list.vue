<template>
	<view class="y-dropdown-list">
		<tui-dropdown-list :show="show" :top="top" :height="height">
			<template v-slot:selectionbox>
				<view class="y-color-href" @tap="showDropDownList">
					{{result}}
					<view class="tui-animation" :class="[show?'tui-animation-show':'']">
						<tui-icon name="turningdown" :size="20"></tui-icon>
					</view>
				</view>
			</template>
			<template v-slot:dropdownbox>
				<view class="tui-selected-list">
					<scroll-view scroll-y class="tui-dropdown-scroll">
						<block v-for="(item,index) in listData" :key="index">
							<tui-list-cell @click="selectItem(item)" :last="listData.length-1==index">
								<tui-icon :name="item.icon" :size="item.size" :color="item.color"></tui-icon>
								<text class=" tui-ml-20">{{item.label}}</text>
							</tui-list-cell>
						</block>
					</scroll-view>
				</view>
			</template>
		</tui-dropdown-list>

	</view>
</template>
<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiDropdownList from "@/components/dropdown-list/dropdown-list"

	export default {
		props: {
			value: {
				type: String,
				default: '请选择',
				required: false
			},
			listData: {
				type: Array,
				default: [],
				required: true
			},
			top: {
				type: Number,
				default: 94,
				required: false
			},
			height: {
				type: Number,
				default: 500,
				required: false
			},
		},
		components: {
			tuiDropdownList,
			tuiIcon
		},
		data() {
			return {
				show: false,
				result: this.value
			}
		},
		computed: {},
		watch: {
			value(val) {
				this.result = val
			}
		},
		created() {},
		mounted() {},
		methods: {
			showDropDownList() {
				this.show = !this.show
			},
			selectItem(item) {
				console.log(item)
				this.show = !this.show
				this.result = item.label

			}
		}
	}
</script>

<style scoped lang="scss">
	.y-dropdown-list {
		flex: 1
	}

	.pay-type-cell {
		overflow: visible;
	}

	.tui-drop-input-box {
		box-sizing: border-box;

		text-align: right
	}

	.tui-animation {
		display: inline-block;
		transform: rotate(0deg);
		transition: all 0.2s;
	}

	.tui-animation-show {
		transform: rotate(180deg);
	}

	.tui-selected-list {
		background: #fff;
		border-radius: 20upx;
		overflow: hidden;
		transform: translateZ(0);
	}

	.tui-dropdown-scroll {}

	.tui-input {
		font-size: 32rpx;
		color: #333;
	}

	.input-pay {
		text-align: right;
	}

	.btn-wrapper {
		padding: 0 30rpx;
	}
</style>
