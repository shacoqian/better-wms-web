import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@utils/auth'

const user = {
  state: {
    token: getToken(),
    email: '',
    username: '',
    telphone: '',
    nickname: ''

    
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_TELPHONE: (state, telphone) => {
      state.telphone = telphone
    },
    SET_NICKNAME: (state, nickname) => {
      state.nickname = nickname
    },
  },
  actions: {
    LoginByEmail({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const data = response.data
          commit('SET_TOKEN', data)
          setToken(data)
          commit('SET_EMAIL', data.email)
          commit('SET_USERNAME', data.user_name)
          commit('SET_TELPHONE', data.telphone)
          commit('SET_NICKNAME', data.nick_name)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user