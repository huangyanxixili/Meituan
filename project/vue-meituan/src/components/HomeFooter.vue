<template>
    <footer class="footer">
            <section class="item">
                <router-link
                    v-for="item in footerStore"
                    :key="item.title"
                    :to="getRoutePath(item.title)"
                    class="nav-item"
                >
                    <div>
                        <van-icon :name="item.icon" />
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
    .item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>