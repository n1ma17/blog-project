import { createRouter, createWebHistory } from 'vue-router'
import Articles from '/src/pages/Articles.vue'
import CreateArticle from '/src/pages/CreateArticle.vue'
import Auth from '/src/pages/Auth.vue'

const routes = [
    {
        path: '/',
        name: 'Articles',
        component: Articles,
    },
    {
        path: '/create-article',
        name: 'CreateArticle',
        component: CreateArticle,
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router