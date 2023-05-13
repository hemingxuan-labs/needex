import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import store from '@/store/index'
import Home from '@/views/home.vue'
import Market from '@/views/market.vue'
import Trade from '@/views/trade.vue'
import Dashboard from '@/views/dashboard.vue'
import Order from '@/views/order.vue'
let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/market',
        name: 'market',
        component: Market,
    },
    {
        path: '/trade',
        name: 'trade',
        component: Trade,
        // component: () => import('@/views/trade.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
    },
    {
        path: '/bounty',
        name: 'bounty',
        component: () => import('@/views/bounty.vue'),
    },
    {
        path: '/catenate-matemask',
        name: 'catenate-matemask',
        component: () => import('@/views/catenate-matemask.vue'),
    },
    {
        path: '/airdrop',
        name: 'airdrop',
        component: () => import('@/views/airdrop.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile.vue'),
    },
    {
        path: '/clue',
        name: 'clue',
        component: () => import('@/views/clue.vue'),
    },
    {
        path: '/presalecreate',
        name: 'presalecreate',
        component: () => import('@/views/presalecreate.vue'),
    },
    { path: '/:pathMatch(.*)*', name: 'notfound', redirect: '/promotion' },
]
const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
})
const whitelist = ['trade', 'market', 'dashboard']
router.beforeEach((to, from, next) => {
    if (whitelist.includes(to.name) && !store.state.persistence.assets) {
        next(`/catenate-matemask?path=${to.name}`)
        return false
    }
    next()
})
export default router
