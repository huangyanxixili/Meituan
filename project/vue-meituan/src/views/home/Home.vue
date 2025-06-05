<template>
    <div class="home">
        <div class="content"></div>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '@/components/HomeFooter.vue'


</script>

<style  scoped>
.home {
    display: flex;
    flex-flow: column;
    height: 100%;
    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>