import Vue from "vue";
import Vuex from "vuex";
import Cookie from 'cookie_js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false
  },
  getters: {},
  mutations: {
    setCollapse(state) {
      state.isCollapse = !state.isCollapse
      sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
    }
  },
  actions: {},
  modules: {}
});
