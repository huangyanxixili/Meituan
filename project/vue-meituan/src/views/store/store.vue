<template>
    <div class="storeDetails">
        <Header title="店铺" />
        <div class="content">
            <div class="img"></div>
            <div class="foodSort">
                <div class="name">
                    {{ title }}
                    <img :src="img" alt="" class="store-img">
                </div>
                <van-tabs color="#ffc400">
                    <van-tab 
                        v-for="(item, index) in tabStore"
                        :title="item.name"
                    >
                        <FoodList 
                            :index="index" 
                            :foodData="item.data"
                        />
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import FoodList from "./components/FoodList.vue";
import { useStoreStore } from "@/stores/storeStore.ts";
import { reactive, toRefs } from "vue";

const tabStore = useStoreStore().tabStore;

let data = reactive({
    title: "酸菜鱼",
    img: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440"
})

const { title, img } = toRefs(data)
</script>

<style lang="less" scoped>
.storeDetails {
    height: 100%;
    display: flex;
    flex-flow: column;
    .content {
        flex: 1;
        overflow-y: auto;
        .img {
            background: url("../../assets/yuna.jpg") no-repeat 
            center/cover;
            width: 100%;
            height: 150px;
        }
        .foodSort {
            height: 500px;
            background-color: #fff;
            margin-top: -30px;
            border-radius: 20px 20px 0 0;
            .sort {
                margin-top: 10px;
            }
            .name {
                display: flex;
                padding: 20px;
                justify-content: space-between;
                .store-img {
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                    margin-top: -30px;
                }
            }
        }
    }
}
</style>
