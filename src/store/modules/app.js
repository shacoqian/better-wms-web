const formItemLayout = {
  labelCol: {
    xs: { span: 12 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
}

const app = {
  state: {
    sidebarOpened: false,
    loadingPage: 0,
    formItemLayout
  },
  mutations: {
    TOGGLE_SIDEBAR: (state, status) => {
      if (status === state.sidebarOpened) return false
      state.sidebarOpened = status === undefined ? status : !state.sidebarOpened
    },
    TOGGLE_LOADING_PAGE: (state, status) => {
      if (status) {
        state.loadingPage++
      }
      else {
        if (state.loadingPage > 0) {
          state.loadingPage--
        }
      }
    }
  },
  actions: {
    toggleSideBar ({ commit }, status) {
      commit('TOGGLE_SIDEBAR', status)
    },
    toggleLoadingPage ({ commit }) {
      commit('TOGGLE_LOADING_PAGE', true)
    },
    closeLoadingPage ({ commit }) {
      commit('TOGGLE_LOADING_PAGE', false)
    }
  }
}

export default app