import Vue from 'vue'
import Vuex from 'vuex'
import cookie from 'cookie_js'

import { Login } from '../api/login'
import {
    setToken,
    setUsername,
    getUsername,
    removeToken,
    removeUsername,
} from '../utils/app'

Vue.use(Vuex)

export default new Vuex.Store({
    // 单一赋值
    state: {
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
        token: '',
        username: getUsername() || '',
    },
    // 计算赋值
    getters: {},
    // 无回调函数
    mutations: {
        setCollapse(state) {
            state.isCollapse = !state.isCollapse
            sessionStorage.setItem(
                'isCollapse',
                JSON.stringify(state.isCollapse)
            )
        },
        setToken(state, value) {
            state.token = value
        },
        setUsername(state, value) {
            state.username = value
        },
    },
    // 回调函数
    actions: {
        login(content, data) {
            return new Promise((resolve, reject) => {
                Login(data)
                    .then((res) => {
                        let data = res.data.data

                        content.commit('setToken', data.token)
                        content.commit('setUsername', data.username)

                        setToken(data.token)
                        setUsername(data.username)

                        resolve(res)
                    })
                    .catch((err) => {
                        reject()
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                removeToken()
                removeUsername()
                commit('setToken', '')
                commit('setUsername', '')
                resolve()
            })
        },
    },
    modules: {},
})
