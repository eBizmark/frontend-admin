import { createApp } from 'vue'
import http from './http';
import './assets/css/app.css'
import router from '@/router'
import store from "./store";
// Untuk State Management Store pake tutorial : https://youtu.be/a8s7Vx0oMmI?t=179
// Bakal mirip kaya Nuthink dulu
import App from '@/App.vue'
import layouts from './layout'


// require('./store/subscriber.js')
import('./store/subscriber.js')

// to do: make just one
store.dispatch('admin/attempt', localStorage.getItem('admin_token')).then(() => console.log("no token"))
store.dispatch('admin/attempt_user', localStorage.getItem('admin_username')).then(() => console.log("no username"))

const app = createApp(App)
app
    .use(layouts)
    .use(router)
    .use(http)
    .use(store)
    .mount('#app')
