import { createWebHashHistory, createRouter } from "vue-router";
import main from "./components/main.vue";
import map from "./components/map.vue";
import about from "./components/about.vue";
import ContactUs from "./components/contact-us.vue";


const routes = [
    {
        name:'main',
        path:'/',
        component:main,
    },
    {
        name:'mao',
        path:'/map',
        component:map

    },
    {
        name:'about',
        path:'/about',
        component:about
    },
    {
        name:'contact-us',
        path:'/contact-us',
        component:ContactUs
    }
];

const router=createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;