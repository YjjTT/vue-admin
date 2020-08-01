// 路由守卫
import router from './index'
import { getToken, removeToken, removeUsername } from '../utils/app'
import store from '../store'

const whiteRouter = ['/login']
/**
 * to 下一个页面
 * from 离开之前的页面
 * next 指向to  next('') 带参数 会无限调用beforeEach 进入死循环
 */
router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === '/login') {
            removeToken()
            removeUsername()
            store.commit('setToken', '')
            store.commit('setUsername', '')
        }
        next()
    } else {
        if (whiteRouter.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})
