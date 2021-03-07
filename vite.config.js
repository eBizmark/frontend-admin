const path = require('path')
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const mode = process.env.APP_ENV

export default ({ mode }) => {
    // process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    Object.assign(process.env, loadEnv(mode, process.cwd()))
    return defineConfig({
        resolve: {
            alias: [
                {
                    find: "@",
                    replacement: path.resolve(__dirname, 'src')}
            ],
            optimizeDeps: {
                include: [
                    "javascript-time-ago/locale/de"
                ],
            },
        },
        plugins: [vue()],
        server: {
            port: process.env.VITE_PORT
        },
    });
}