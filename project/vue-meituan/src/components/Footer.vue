<template>
    <footer class="footer">
        <section class="item">
            <router-link
                v-for="item in footerStore"
                :key="item.title"
                :to="getRoutePath(item.title)"
                class="nav-item"
                active-class="nav-color"
            >
                <div>
                    <van-icon :name="item.icon" size="30"/>
                </div>
                <div>
                    {{ item.name }}
                </div>
            </router-link>
        </section>
    </footer>
</template>

<script setup>
import { useFooterStore } from "@/stores/homeStore.ts";
const footerStore = useFooterStore().footerStore;

function getRoutePath(title) {
    return `/${title}`;
}
</script>

<style lang="less" scoped>
.footer {
    background-color: #fff;
    border-top: 0.5px solid #eee;
    .item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .nav-color {
            color: #ffc400; 
        }
        .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>