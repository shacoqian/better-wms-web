import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import app from './modules/app'
import data from './modules/data'
import user from './modules/user'

let $store = new Vuex.Store({
  modules:{
    app,
    data,
    user
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {
    sidebarOpened: (state) => state.app.sidebarOpened,
    formItemLayout: (state) => state.app.formItemLayout
  } 
})



const store = () => $store

export {
  $store
}
export default store
