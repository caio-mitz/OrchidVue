import authService from '@/api/auth'

import api from "@/plugins/axios";

export const auth = {
    namespaced: true,
    state: () => ({
        loggedIn: false,
        user: {}
    }),
    mutations: {
        setLoginInfo(state, user) {
            state.user = user
            state.loggedIn = true
        },
        setLogout(state) {
            state.user = {}
            state.loggedIn = false
        }
    },
    actions: {
        async login({ commit, dispatch }, user) {
            try {
                const userInfo = await authService.login(user)
                commit('setLoginInfo', userInfo)
                api.defaults.headers.common['Authorization'] = userInfo.access;
                dispatch("getUsuario");
                return Promise.resolve(userInfo)
            } catch (e) {
                commit('setLogout')
                return Promise.reject(e)
            }
        },
        async getUsuario() {
            const { data } = await api.get("usuarios/");
            console.log(data)
        },
        logout({ commit }) {
            commit('setLogout')
        }
    }
}