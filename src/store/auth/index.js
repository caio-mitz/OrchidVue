import authService from '@/api/auth'

import api from "@/plugins/axios";

export const auth = {
    namespaced: true,
    state: () => ({
        loggedIn: false,
        credentials: {},
        user: {},
    }),
    mutations: {
        setLoginInfo(state, credentials) {
            state.credentials = credentials
            state.loggedIn = true
        },
        setLogout(state) {
            state.credentials = {}
            state.loggedIn = false
        },
        setUserInfo(state, user) {
            state.user = user;
        }
    },
    actions: {
        async login({ commit, dispatch }, credentials) {
            try {
                const credentialsInfo = await authService.login(credentials)
                commit('setLoginInfo', credentialsInfo)
                api.defaults.headers.common['Authorization'] = "Bearer " + credentialsInfo.access;
                dispatch("getUsuario");
                return Promise.resolve(credentialsInfo)
            } catch (e) {
                commit('setLogout')
                return Promise.reject(e)
            }
        },
        async getUsuario({ commit }) {
            const { data } = await api.get("usuarios");
            const [user] = data;

            commit("setUserInfo", user)
        },
        logout({ commit }) {
            commit('setLogout')
        }
    }
}