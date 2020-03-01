require('./bootstrap');

window.Vue = require('vue');

window.Vue.prototype.$http = axios;


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import locale from 'element-ui/lib/locale/lang/en';
Vue.use(ElementUI);




import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Dashboard from "./views/Dashboard";
import Rooms from "./views/Rooms";
import App from "./views/App";


const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/rooms',
        name: 'rooms',
        component: Rooms,
    },
]


const router = new VueRouter({
    mode: 'history',
    routes,
});



const app = new Vue({
    el: '#app',
    router,
    components: { App },
});
