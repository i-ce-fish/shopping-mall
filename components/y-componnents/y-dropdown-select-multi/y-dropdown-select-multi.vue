<template>
    <view >
        <!--header-->
        <view class="tui-header">
            <view class="tui-header-bottom">
                <view class="tui-bottom-item" :class="[proDropIndex==0?'tui-btmItem-active':'']" @tap="btnDropChange(0)">
                    <view class="tui-bottom-text" :class="[proDropIndex==0?'tui-active':'']">品牌</view>
                    <tui-icon :name="proDropIndex==0?'arrowup':'arrowdown'" :size="14" :color="proDropIndex==0?'#5677fc':'#444'"></tui-icon>
                </view>
                <view class="tui-bottom-item" :class="[proDropIndex==1?'tui-btmItem-active':'']" @tap="btnDropChange(1)">
                    <view class="tui-bottom-text" :class="[proDropIndex==1?'tui-active':'']">类型</view>
                    <tui-icon :name="proDropIndex==1?'arrowup':'arrowdown'" :size="14" :color="proDropIndex==1?'#5677fc':'#444'"></tui-icon>
                </view>
                <view class="tui-bottom-item" :class="[proDropIndex==2?'tui-btmItem-active':'']" @tap="btnDropChange(2)">
                    <view class="tui-bottom-text" :class="[proDropIndex==2?'tui-active':'']">手机</view>
                    <tui-icon :name="proDropIndex==2?'arrowup':'arrowdown'" :size="14" :color="proDropIndex==2?'#5677fc':'#444'"></tui-icon>
                </view>
            </view>
        </view>
            <!--header 顶部下拉选择框-->
            <tui-top-dropdown :show="dropShow" :paddingbtm="110"  @close="btnCloseDrop">
                <scroll-view class="tui-scroll-box" scroll-y scroll-with-animation :scroll-top="scrollTop">
                    <view class="tui-seizeaseat-20"></view>
                    <view class="tui-drop-item" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in proDropData" :key="index"
                          @tap.stop="btnSelected" :data-index="index">
                        <tui-icon name="check" :size="16" color="#5677fc" :bold="true" v-if="item.selected"></tui-icon>
                        <text class="tui-ml tui-middle">{{item.name}}</text>
                    </view>
                    <view class="tui-seizeaseat-30"></view>
                </scroll-view>
                <view class="tui-drop-btnbox">
                    <view class="tui-drop-btn btn-white" hover-class="tui-white-hover" :hover-stay-time="150" @tap="reset">重置</view>
                    <view class="tui-drop-btn btn-primary" hover-class="btn-hover" :hover-stay-time="150" @tap="btnCloseDrop">确定</view>
                </view>
            </tui-top-dropdown>
        <!--header-->

    </view>
</template>

<script>
    import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
    import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
    import tuiIcon from "@/components/icon/icon"

    export default {
        components: {
            tuiTopDropdown,
            tuiBottomPopup,
            tuiIcon
        },
        data() {
            return {
                proDropList: [{
                    list: [{
                        name: "trendsetter",
                        selected: false
                    }, {
                        name: "维肯（Viken）",
                        selected: false
                    }, {
                        name: "AORO",
                        selected: false
                    }, {
                        name: "苏发",
                        selected: false
                    }, {
                        name: "飞花令（FHL）",
                        selected: false
                    }, {
                        name: "叶梦丝",
                        selected: false
                    }, {
                        name: "ITZOOM",
                        selected: false
                    }, {
                        name: "亿魅",
                        selected: false
                    }, {
                        name: "LEIKS",
                        selected: false
                    }, {
                        name: "雷克士",
                        selected: false
                    }, {
                        name: "蕊芬妮",
                        selected: false
                    }, {
                        name: "辉宏达",
                        selected: false
                    }, {
                        name: "英西达",
                        selected: false
                    }, {
                        name: "戴为",
                        selected: false
                    }, {
                        name: "魔风者",
                        selected: false
                    }, {
                        name: "即满",
                        selected: false
                    }, {
                        name: "北比",
                        selected: false
                    }, {
                        name: "娱浪",
                        selected: false
                    }, {
                        name: "搞怪猪",
                        selected: false
                    }]
                }, {
                    list: [{
                        name: "线充套装",
                        selected: false
                    }, {
                        name: "单条装",
                        selected: false
                    }, {
                        name: "车载充电器",
                        selected: false
                    }, {
                        name: "PD快充",
                        selected: false
                    }, {
                        name: "数据线转换器",
                        selected: false
                    }, {
                        name: "多条装",
                        selected: false
                    }, {
                        name: "充电插头",
                        selected: false
                    }, {
                        name: "无线充电器",
                        selected: false
                    }, {
                        name: "座式充电器",
                        selected: false
                    }, {
                        name: "万能充",
                        selected: false
                    }, {
                        name: "转换器/转接线",
                        selected: false
                    }, {
                        name: "MFI苹果认证",
                        selected: false
                    }, {
                        name: "转换器",
                        selected: false
                    }, {
                        name: "苹果认证",
                        selected: false
                    }]
                }, {
                    list: [{
                        name: "通用",
                        selected: false
                    }, {
                        name: "vivo",
                        selected: false
                    }, {
                        name: "OPPO",
                        selected: false
                    }, {
                        name: "魅族",
                        selected: false
                    }, {
                        name: "苹果",
                        selected: false
                    }, {
                        name: "华为",
                        selected: false
                    }, {
                        name: "三星",
                        selected: false
                    }, {
                        name: "荣耀",
                        selected: false
                    }, {
                        name: "诺基亚5",
                        selected: false
                    }, {
                        name: "荣耀4",
                        selected: false
                    }, {
                        name: "诺基",
                        selected: false
                    }, {
                        name: "荣耀",
                        selected: false
                    }, {
                        name: "诺基亚2",
                        selected: false
                    }, {
                        name: "荣耀2",
                        selected: false
                    }, {
                        name: "诺基",
                        selected: false
                    }]
                }],
                proDropData: [],
                proDropIndex: -1,
                dropShow: false,
                scrollTop: 0,
                dropdownlistData: [{
                    name: "微信支付",
                    icon: "wechat",
                    color: "#80D640",
                    size: 30
                }, {
                    name: "支付宝支付",
                    icon: "alipay",
                    color: "#00AAEE",
                    size: 30
                }, {
                    name: "银行卡支付",
                    icon: "bankcard-fill",
                    color: "#ff7900",
                    size: 28
                }, {
                    name: "微信支付",
                    icon: "wechat",
                    color: "#80D640",
                    size: 30
                }, {
                    name: "支付宝支付",
                    icon: "alipay",
                    color: "#00AAEE",
                    size: 30
                }, {
                    name: "银行卡支付",
                    icon: "bankcard-fill",
                    color: "#ff7900",
                    size: 28
                }],
                dropdownShow: false,
                popupShow: false,
                shareList: [{
                    share: [{
                        name: "QQ",
                        icon: "qq",
                        color: "#07BDFD",
                        size:34
                    }, {
                        name: "微信",
                        icon: "wechat",
                        color: "#80D640"
                    }, {
                        name: "朋友圈",
                        icon: "moments",
                        color: "#80D640",
                        size:32
                    }, {
                        name: "支付宝",
                        icon: "alipay",
                        color: "#00AAEE"
                    }, {
                        name: "新浪微博",
                        icon: "sina",
                        color: "#F9C718"
                    }, {
                        name: "小程序",
                        icon: "applets",
                        color: "#2BA348"
                    }, {
                        name: "钉钉",
                        icon: "dingtalk",
                        color: "#2DA0F1"
                    }, {
                        name: "浏览器打开",
                        icon: "explore-fill",
                        color: "#1695F7"
                    }, {
                        name: "邮件",
                        icon: "mail-fill",
                        color: "#2868E5"
                    }]
                }, {
                    operate: [{
                        name: "投诉",
                        icon: "warning",
                        size: 30
                    }, {
                        name: "复制链接",
                        icon: "link",
                        size: 28
                    }, {
                        name: "刷新",
                        icon: "refresh",
                        size: 30
                    }, {
                        name: "搜索内容",
                        icon: "search-2",
                        size: 28
                    }]
                }]
            }
        },
        methods: {
            btnDropChange(index) {
                this.proDropData = [...this.proDropList[index].list];
                this.proDropIndex = index;
                this.dropShow = true;
            },
            btnSelected: function(e) {
                let index = e.currentTarget.dataset.index;
                let obj = this.proDropData[index];
                this.$set(obj, 'selected', !obj.selected)
            },
            reset() {
                this.dropShow = false;

                let arr = this.proDropData;
                for (let item of arr) {
                    item.selected = false;
                }
                this.proDropData = arr
            },
            btnCloseDrop() {
                this.scrollTop = 1;
                this.$nextTick(() => {
                    this.scrollTop = 0
                });
                this.dropShow = false;
                this.proDropIndex = -1;
                this.reset()
            },
            dropDownList(index) {
                if (index !== -1) {
                    this.toast("index：" + index)
                }
                this.dropdownShow = !this.dropdownShow
            },
            popup: function() {
                this.popupShow = !this.popupShow
            }
        }
    }
</script>

<style scoped>
    /* 隐藏scroll-view滚动条*/
    ::-webkit-scrollbar {
        width: 0;
        height: 0;
        color: transparent;
    }

    /*header*/
    .tui-header {
        width: 100%;
        /* box-shadow: 0 15upx 10upx -15upx #f2f2f2; */
        box-sizing: border-box;
        background: #fff;
        position: relative;
        z-index: 990;
    }

    .tui-header-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 26upx;
        color: #333;
    }

    .tui-bottom-item {
        margin-left: 6upx;
    }

    .tui-header-bottom {
        /*height: 70upx;*/
        padding: 16rpx 30upx;
        box-sizing: border-box;
        font-size: 24upx;
        align-items: flex-start;
        overflow: hidden;
    }

    .tui-bottom-text {
        line-height: 24upx;
    }

    .tui-bottom-item {
        flex: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 18upx 12upx;
        border-radius: 40upx;
        box-sizing: border-box;
        background: #f2f2f2;
        margin-right: 20upx;
        white-space: nowrap;
    }

    .tui-bottom-item:last-child {
        margin-right: 0;
    }


    .tui-ml {
        margin-left: 6upx;
    }

    .tui-seizeaseat-20 {
        height: 20upx;
    }

    .tui-seizeaseat-30 {
        height: 30upx;
    }

    .tui-middle {
        vertical-align: middle;
    }

    .tui-drop-item {
        vertical-align: middle;
    }

    /*header*/
    /*header 下拉选择*/
    .tui-scroll-box {
        width: 100%;
        height: 480upx;
        box-sizing: border-box;
        position: relative;
        z-index: 99;
        color: #fff;
        font-size: 30upx;
        word-break: break-all;
    }

    .tui-drop-item {
        color: #333;
        height: 80upx;
        font-size: 28upx;
        padding: 20upx 40upx 20upx 40upx;
        box-sizing: border-box;
        display: inline-block;
        width: 50%;
    }

    .tui-drop-btnbox {
        width: 100%;
        height: 100upx;
        position: absolute;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
        display: flex;
    }

    .tui-drop-btn {
        width: 50% !important;
        border-radius: 0 !important;
        font-size: 32upx !important;
        text-align: center;
        height: 100upx;
        line-height: 100upx;
        border: 0;
    }

</style>
