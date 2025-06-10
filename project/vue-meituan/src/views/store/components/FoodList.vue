<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select
            v-model:main-active-index="activeIndex"
            height="88vw"
            :items="items"
            @click-nav="navClick"
        >
            <template #content>
                <div v-for="(item, index) in subItem" class="item-bg">
                    <FoodListItem 
                        :item="item" 
                    />
                </div>  
            </template>
        </van-tree-select>
    </div>

    <div v-else>
        {{ foodData.content }}
    </div>
</template>

<script setup>
import { defineProps, initCustomFormatter } from "vue";
import { reactive, toRefs } from "vue";
import FoodListItem from "./FoodListItem.vue";
import { submitBarProps } from "vant";


const props = defineProps({
    index: Number,
    foodData: Object, 
})

let data = reactive({
    activeIndex: 0,
    items: [],
    subItem:[]
})

const { activeIndex, items, subItem } = toRefs(data)

// 初始化数据
const initData = () => {
    let newArray = [];
    // 使用?(可选链操作符)，避免属性为null/undefined时的错误
    props.foodData?.items?.forEach((item, index) => {
        newArray.push({
            text: item.text,
        })
        if(data.activeIndex === index){
            data.subItem = item.children;
        }
    })
    data.items = newArray;
}

initData();

const navClick = (i) => {
    data.activeIndex = i;
    initData();
}
</script>

<style lang="less" scoped>
.food-list {
    margin-top: 20px;
    .item-bg {
        padding: 10px;
    }
}

/deep/ .van-tree-select__item--active {
    color: #ffc400;
}

/deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
}
</style>