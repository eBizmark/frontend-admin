import { createApp } from 'vue'
import http from './http';
import './assets/css/app.css'
import router from '@/router'
import store from "./store";
// Untuk State Management Store pake tutorial : https://youtu.be/a8s7Vx0oMmI?t=179
// Bakal mirip kaya Nuthink dulu
import App from '@/App.vue'
import DashboardLayout from '@/components/DashboardLayout.vue'
// import EmptyLayout from '@/components/EmptyLayout.vue'

// require('./store/subscriber.js')
import('./store/subscriber.js')

// to do: make just one
store.dispatch('admin/attempt', localStorage.getItem('admin_token')).then(() => console.log("no token"))
store.dispatch('admin/attempt_user', localStorage.getItem('admin_email')).then(() => console.log("no email"))

const app = createApp(App)
app
    .component('default-layout', DashboardLayout)
    // .component('empty-layout', EmptyLayout)
    .use(router)
    .use(http)
    .use(store)
    .mount('#app')
