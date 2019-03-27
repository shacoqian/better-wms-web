import axios from 'axios'
import { Message } from 'ant-design-vue'

import {
  $store
} from '@/store'

const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  timeout: 1200000,
  withCredentials: true,
  validateStatus: function (status) {
    return status === 200
  }
})

function handleError (error) {
  Message.error((error.data && error.data.msg) || error.message || '发生错误了，请重试')
  return Promise.reject(error.data)
}

request.interceptors.request.use(function (config) {
  $store.dispatch('toggleLoadingPage')
  config.params = config.params || {}
  config.params._t = +(new Date())
  return config
}, function (error) {
  return handleError(error)
})

request.interceptors.response.use(function (response) {
  $store.dispatch('closeLoadingPage')
  const code = response.data.code
  const data = response.data || {}
  if (code === -999) {
    window.location.href = `/users/login`
    return Promise.resolve(data)
  } else if (code === 1) {
    return Promise.resolve(data)
  } else {
    return handleError(response)
  }

}, function (error) {
  $store.dispatch('closeLoadingPage')
  return handleError(error)
})

export default request