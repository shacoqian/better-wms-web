import request from '@/utils/request'

/**
 * @description 登录
 * @param params
 * @returns {Promise<void>}
 */
export async function login (params) {
  return request({
    url:'/login',
    method:'get',
    params
  })
}