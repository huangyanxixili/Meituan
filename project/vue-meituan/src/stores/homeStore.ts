import { defineStore } from 'pinia'
import { ref } from 'vue'

import type {
    FooterStoreItem, 
    BigSortStoreItem,
    SmallSortStoreItem,
    ContentNavListStoreItem,
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

    /*  */
    const cententNavListStore = ref<ContentNavListStoreItem[]>([
        {
            tab: "天天神券",
            data: [
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                    title: "隆江猪脚饭",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
            ],
        },
        {
            tab: "减配送费",
            data: [
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
            ],
        },
        {
            tab: "点评高分",
            data: [
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
            ],
        },
        {
            tab: "会员满减",
            data: [
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
                {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                },
            ],
        }
    ])

    return { 
        footerStore,
        bigSortStore,
        smallSortStore,
        cententNavListStore,
    }
})