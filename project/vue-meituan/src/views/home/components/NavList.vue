<template>
    <div 
        v-for="(item, index) in navList"
        :key="index"
    >
        <nav-list-item 
            :itemContent="item"
        />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import NavListItem from './NavListItem.vue';

const props = defineProps({
    navList: {
        type: Array,
        required: true,
        default: () => []
    }
})
</script>

<style lang="less" scoped>

</style>