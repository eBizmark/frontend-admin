import axios from 'axios';

axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.baseURL = 'http://localhost:3333/'

export default (app) => {
    app.axios = axios;
    app.$http = axios;

    app.config.globalProperties.axios = axios;
    app.config.globalProperties.$http = axios;
}