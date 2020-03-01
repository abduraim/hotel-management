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


import App from "./views/App";
import Reservations from "./views/Reservations";
import Contacts from "./views/Contacts";
import Rooms from "./views/Rooms";
import Settings from "./views/Settings";

import createRoom from "./views/rooms/createRoom";


const routes = [
    {
        path: '/reservations',
        name: 'reservations',
        component: Reservations,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
    },
    {
        path: '/rooms',
        name: 'rooms',
        component: Rooms,
    },
    {
        path: '/rooms/create',
        name: 'create-room',
        component: createRoom,
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
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
