import store from './index'
import axios from "axios";

store.subscribe((mutation => {
    // to do: make just one case
    switch (mutation.type) {
        case 'admin/SET_TOKEN':
            if(mutation.payload) {
                axios.defaults.headers.common['Authorization'] = mutation.payload
                localStorage.setItem('admin_token', mutation.payload)
            } else {
                axios.defaults.headers.common['Authorization'] = null
                localStorage.removeItem('admin_token')
            }
            break;
        case 'admin/SET_USER':
            if(mutation.payload) {
                localStorage.setItem('admin_email', mutation.payload)
            } else {
                localStorage.removeItem('admin_email')
            }
    }
}))