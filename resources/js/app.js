require('./bootstrap');

window.Vue = require('vue');

window.Vue.prototype.$http = axios;


import App from "./views/App";



// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import locale from 'element-ui/lib/locale/lang/ru-RU';
Vue.use(ElementUI, {locale});



// VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Paths
import roomPaths from "./routes/rooms";
import reservationPaths from "./routes/reservations";
import contactPaths from "./routes/contacts";
import settingPaths from "./routes/settings";

const routes = [
    ...reservationPaths,
    ...contactPaths,
    ...roomPaths,
    ...settingPaths,
];

const router = new VueRouter({
    mode: 'history',
    routes,
});


// Create App
const app = new Vue({
    el: '#app',
    router,
    components: { App },
});
