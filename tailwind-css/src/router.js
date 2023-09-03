import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/page/HomePage.vue'
import Snap from '@/page/SnapPage.vue'
import Button from '@/page/ButtonPage.vue'

const router = createRouter({
    history: createWebHistory(),
    
    routes:[
        {
            path:"/",
            component: Home,
            name:"home",
        },
        {
            path:"/snap",
            component: Snap,
            name:"snap"
        },
        {
            path:"/button",
            component: Button,
            name:"button"
        },

    ]
})

export default router