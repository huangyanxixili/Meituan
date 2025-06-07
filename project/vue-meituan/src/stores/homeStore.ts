import { defineStore } from 'pinia'
import { ref } from 'vue'

import type {
    FooterStoreItem, 
    BigSortStoreItem,
    SmallSortStoreItem,
} from '@/types/home';

export const  useHomeStore = defineStore('home', () => {
    /* 底部导航栏 */
    const footerStore = ref<FooterStoreItem[]>([
        { 
            title: 'home',
            icon: 'wap-home-o',
            name: '首页',
        },
        { 
            title: 'shoppingCart', 
            icon: 'shopping-cart-o',
            name: '购物车',
        },
        { 
            title: 'order', 
            icon: 'orders-o',
            name: '订单',
        },
        { 
            title: 'my', 
            icon: 'user-o',
            name: '我的',
        },
    ])

    /* 大分类 */
    const bigSortStore = ref<BigSortStoreItem[]>([
        {
            title: "外卖",
            icon: "icon-waimai",
        },
        {
            title: "团购",
            icon: "icon-tuangou",
        },
        {
            title: "超市便利",
            icon: "icon-a-083_chaoshi",
        },
        {
            title: "酒店住宿",
            icon: "icon-jiudianzhusu",
        },
        {
            title: "看病买药",
            icon: "icon-yaopin",
        },
    ]) 

    /* 小分类 */
    const smallSortStore = ref<SmallSortStoreItem[]>([
        {
            title: "美食",
            icon: "icon-meishi1",
        },
        {
            title: "休闲娱乐",
            icon: "icon-xiuxianyule",
        },
        {
            title: "汉堡",
            icon: "icon-meishi",
        },
        {
            title: "拼好饭",
            icon: "icon-meituanpinhaofan2",
        },
        {
            title: "电影",
            icon: "icon-dianyingpiao",
        },
        {
            title: "KTV",
            icon: "icon-KTV",
        },
        {
            title: "奶茶饮品",
            icon: "icon-icon-test",
        },
        {
            title: "车票",
            icon: "icon-chepiao",
        },
        {
            title: "生活服务",
            icon: "icon-shenghuofuwu-banjiafuwu",
        },
        {
            title: "全部分类",
            icon: "icon-classquanbufenlei",
        },
    ])

    return { 
        footerStore,
        bigSortStore,
        smallSortStore,
    }
})