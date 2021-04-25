import {createLogger, createStore} from "vuex";
import admin from './modules/admin';

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        admin
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})