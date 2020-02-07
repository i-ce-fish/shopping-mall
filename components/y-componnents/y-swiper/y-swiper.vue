<template>
    <view class="tui-banner-swiper">

    <swiper :autoplay="true" :interval="5000" :duration="150" :circular="true" :style="{height:height + 'px'}" @change="bannerChange">
        <block v-for="(item,index) in banner" :key="index">
            <swiper-item :data-index="index" @tap.stop="previewImage">
                <image :src="item" class="tui-slide-image" :style="{height:height+'px'}" />
            </swiper-item>
        </block>
    </swiper>
    <tui-tag type="translucent" shape="circleLeft" size="small">{{bannerIndex+1}}/{{banner.length}}</tui-tag>
    </view>

</template>
<script>
    import tuiTag from "@/components/tag/tag"
export default {
        components: {			tuiTag},
        data() {
            return {banner: [
                    "https://www.thorui.cn/img/product/11.jpg",
                    "https://www.thorui.cn/img/product/2.png",
                    "https://www.thorui.cn/img/product/33.jpg",
                    "https://www.thorui.cn/img/product/4.png",
                    "https://www.thorui.cn/img/product/55.jpg",
                    "https://www.thorui.cn/img/product/6.png",
                    "https://www.thorui.cn/img/product/7.jpg",
                    "https://www.thorui.cn/img/product/8.jpg"
                ],				bannerIndex: 0}
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
        },
        methods: {
            previewImage: function(e) {
                let index = e.currentTarget.dataset.index;
                uni.previewImage({
                    current: this.banner[index],
                    urls: this.banner
                })
            },
            bannerChange: function(e) {
                this.bannerIndex = e.detail.current
            }},
        props: {
            //轮播图高度
            height: {type: [String,Number], default: "375", required: true}
        }
    }
</script>

<style scoped lang="scss">

    .tui-banner-swiper {
        position: relative;
    }

    .tui-banner-swiper .tui-tag-class {
        position: absolute;
        color: #fff;
        bottom: 30rpx;
        right: 0;
    }
</style>
