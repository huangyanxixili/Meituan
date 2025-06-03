import { 
    createRouter,
    createWebHashHistory
} from 'vue-router'

import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: '首页',
            cache: true
        },
        component: () => import('@/views/home/Home.vue')
    },
    {
        path: '/my',
        name: 'my',
        meta: {
            title: '我的',
            cache: true
        },
        component: () => import('@/views/my/Mine.vue')
    },
    {
        path: '/order',
        name: 'order',
        meta: {
            title: '订单',
            cache: true
        },
        component: () => import('@/views/order/Order.vue')
    },
    {
        path: '/shoppingCart',
        name: 'shoppingCart',
        meta: {
            title: '购物车',
            cache: true
        },
        component: () => import('@/views/shoppingCart/Cart.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string
    next()
})

export default router