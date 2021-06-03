import VueRouter from "vue-router"
import Vue from 'vue'
// import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/news',
    },
    {
        path: '/news',
        component: () => import("./components/news.vue")
    },
    {
        path: '/registry',
        component: () => import("./components/registry.vue")
    },
    {
        path: '/login',
        component: () => import("./components/login.vue")
    },
    {
        path: '/class',
        component: () => import('./components/class.vue')
    }
]

export default new VueRouter({routes})
