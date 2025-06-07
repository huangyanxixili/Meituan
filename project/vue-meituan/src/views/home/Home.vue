<template>
    <div class="home">
        <div class="content">
            <!-- 头部 -->
            <header class="header">
                <div class="text">外卖</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>地址</span>
                    <van-icon name="arrow" />
                </div>
            </header>
            <!-- 主题内容 -->
            <main class="main">
                <div class="main-bcg">
                    <!-- 搜索框 -->
                    <section class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </section>
                    <!-- 分类 -->
                    <section class="sort">
                        <div class="big-sort">
                            <div
                                v-for="item in bigSortStore"
                                :key="item.title"
                                class="nav-item"
                            >
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="['#' + item.icon]"></use>
                                </svg>
                                <div>
                                    {{ item.title }}
                                </div>
                            </div>
                        </div>
                        <div class="small-sort">
                            <div
                                v-for="item in smallSortStore"
                                :key="item.title"
                                class="nav-item"
                            >
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="['#' + item.icon]"></use>
                                </svg>
                                <div>
                                    {{ item.title }}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import { useHomeStore } from "@/stores/homeStore.ts";
const bigSortStore = useHomeStore().bigSortStore;
const smallSortStore = useHomeStore().smallSortStore;


</script>

<style lang="less" scoped>
.home {
    display: flex;
    flex-flow: column;
    height: 100%;
    font-size: 12px;
    .content {
        flex: 1;
        overflow-y: auto;
        .header {
            background-image: linear-gradient(#ffc400, #fff);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 20px 40px 20px;
            .text {
                font-size: 20px;
                font-weight: 600;
            }
            .location {
                span {
                    margin: 0 5px;
                }
                font-size: 14px;
            }
        }
        .main {
            margin-top: -30px;
            .main-bcg {
                background-image: linear-gradient(#fff, #f5f5f5);
                padding: 10px 20px 0px 20px;
                border-radius: 30px 30px 0 0;
                .search {
                    position: relative;
                    input {
                        width: 100%;
                        border: 1px solid #ffc400;
                        border-radius: 20px;
                        height: 30px;
                    }
                    .search-text {
                        position: absolute;
                        right: -6px;
                        top: 1px;
                        background-color: #ffc400;
                        border-radius: 16px;
                        width: 50px;
                        height: 32px;
                        line-height: 32px;
                        font-size: 14px;
                        text-align: center;
                    }
                }
                .sort {
                    padding: 20px 0;
                    .big-sort {
                        display: flex;
                        .nav-item {
                            display: flex;
                            flex: 1;
                            justify-self: center;
                            flex-flow: column;
                            align-items: center;
                            .icon {
                                width: 50px;
                                height: 50px;
                                margin-bottom: 5px;
                            }
                        }
                    }
                    .small-sort {
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 20px;
                        .nav-item {
                            display: flex;
                            justify-content: center;
                            flex-flow: column;
                            align-items: center;
                            width: 20%;
                            .icon {
                                width: 30px;
                                height: 30px;
                                margin: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>