<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select
            v-model:main-active-index="activeIndex"
            height="88vw"
            :items="items"
        >
            <template #content>
                商品
            </template>
        </van-tree-select>
    </div>

    <div v-else>
        {{ foodData.content }}
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { reactive, toRefs } from "vue";

const props = defineProps({
    index: Number,
    foodData: Object, 
})

let data = reactive({
    activeIndex: 0,
    items: [
        { text: '一级 1' },
        { text: '一级 2' } 
    ]
})

const { activeIndex, items } = toRefs(data)

</script>

<style lang="less" scoped>

</style>