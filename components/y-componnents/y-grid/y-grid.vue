<template>
    <tui-grid>
        <block v-for="(item,index) in dataList" :key="index">
            <!--不支持class-->
            <tui-grid-item :cell="cell" @click="click(index)">
                <view class="tui-grid-icon">
                    <tui-icon :name="item.icon" :size="item.size" :color="item.color"></tui-icon>
                </view>
                <text class="tui-grid-label">{{item.name}}</text>
            </tui-grid-item>
        </block>
    </tui-grid>
</template>
<script>
    import tuiIcon from "@/components/icon/icon"
    import tuiGrid from "@/components/grid/grid"
    import tuiGridItem from '@/components/grid-item/grid-item'
    export default {
        components: {
            tuiGrid,
            tuiGridItem,
            tuiIcon
        },
        props:{dataList:{type:Array,default:[]}},
        data() {
            return {
                cell:4,
            }
        },
        methods: {
            detail: function(e) {
                this.toast("未完成的功能~");
            },
            click(index) {
                this.$emit('click',index)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tui-grid-icon {
        width: 64upx;
        height: 64upx;
        margin: 0 auto;
        text-align: center;
        vertical-align: middle;
    }

</style>
