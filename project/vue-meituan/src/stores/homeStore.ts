import { defineStore } from 'pinia'
import { ref } from 'vue'

import type {
    FooterStoreItem,
} from '@/types/home';

export const  useFooterStore = defineStore('footer', () => {
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
    ]);

    return { 
        footerStore 
    }
})