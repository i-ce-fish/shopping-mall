<template>
    <view>
        <picker :value="value" mode="multiSelector" @change="picker" @columnchange="columnPicker" :range="selectList">
            <view class="result y-color-href">
                {{text}}
            </view>
        </picker>

    </view>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                selectList: [["a","b"], ["c","d","e","f"]], //接口返回picker数据
                multiArray: [["a","b"], ["c","d","e","f"]], //处理后picker数据
                value: [0, 0],
                text: "请选择",
                id: ""}
        },
        //todo 数据预处理、点击时切换第二列内容
        onLoad: function() {
            this.multiArray = [
                this.toArr(this.selectList),
                this.toArr(this.selectList[0].children),
                this.toArr(this.selectList[0].children[0].children)
            ]
        },
        methods: {
            picker: function(e) {
                let value = e.detail.value;
                if (this.selectList.length > 0) {
                    let provice = this.selectList[value[0]].name
                    let city = this.selectList[value[0]].children[value[1]].name
                    let district = this.selectList[value[0]].children[value[1]].children[value[2]].name
                    this.text = provice + " " + city + " " + district;
                    this.id = this.selectList[value[0]].children[value[1]].children[value[2]].id
                }
            },
            toArr(object) {
                let arr = [];
                for (let i in object) {
                    arr.push(object[i].name);
                }
                return arr;
            },
            columnPicker: function(e) {
                //第几列 下标从0开始
                let column = e.detail.column;
                //第几行 下标从0开始
                let value = e.detail.value;
                if (column === 0) {
                    this.multiArray = [
                        this.multiArray[0],
                        this.toArr(this.selectList[value].children),
                        this.toArr(this.selectList[value].children[0].children)
                    ];
                    this.value = [value, 0, 0]
                } else if (column === 1) {
                    this.multiArray = [
                        this.multiArray[0],
                        this.multiArray[1],
                        this.toArr(this.selectList[this.value[0]].children[value].children)
                    ];
                    this.value = [this.value[0], value, 0]
                }
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
