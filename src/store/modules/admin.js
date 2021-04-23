import axios from "axios";

const state = {
    // user: {}
    token: null,
    user: ''
};
const mutations = {
    SET_TOKEN (state, token) {
        state.token = token
    },

    SET_USER (state, data) {
        state.user = data
        // window.location.replace('/events')
    }
};
const actions = {
    // async setAuthentication(_, user) {
    //     await axios
    //         .post('auth/login', {
    //             email: user.email,
    //             password: user.password
    //         })
    //         .then(response => {
    //             if(response.data.accessToken) {
    //                 localStorage.setItem(
    //                     "admin_token",
    //                     response.data.accessToken
    //                 )
    //                 window.location.replace('/events')
    //             }
    //             // console.log(response.data.accessToken)
    //         })
    //         .catch((error) => console.log(error))
    // }
    async setAuthentication({commit}, payload) {
        let response = await axios.post('auth/login', payload)

        // console.log(response.data)
        // const data = {
        //     token: response.data.accessToken,
        //     email: credentials.email
        // }
        await commit('SET_USER', payload.email)
        await commit('SET_TOKEN', response.data.accessToken)
        // await console.log(getters.getUser(state))

        // setTimeout(function(){
        //     window.location.replace('/events')
        // }, 3000);

        // await commit('SET_USER', data.email)

        // console.log(state.user)

        // await window.location.replace('/events')

    },

    // attempt({commit}, data) {
    //     commit('SET_TOKEN', data.token)
    //
    //     commit('SET_USER', data.email)
    //     console.log(data.email)
    //
    //     window.location.replace('/events')
        // try {
        //     let response = await axios.get('auth/me', {
        //         headers: {
        //             'Authorization': token
        //         }
        //     })
        //
        //     commit('SET_USER', response.data)
        // } catch (e) {
        //     commit('SET_TOKEN', null)
        //     commit('SET_USER', null)
        // }
    // }
};
const getters = {
    // isAuthenticated(state) {
    //     return state.token && state.user
    //     // return state.token
    // },

    isAuthenticated: state => state.token && state.user,
    getUser: state => state.user
    // user(state) {
    //     return state.user
    // }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
