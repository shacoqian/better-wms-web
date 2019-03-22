import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import app from './modules/app'
import data from './modules/data'

let $store = new Vuex.Store({
  modules:{
    app,
    data
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
