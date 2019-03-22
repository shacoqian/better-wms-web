import request from '@/utils/request'

/**
 * 仓库
 * @param params
 * @returns {Promise<void>}
 */
export async function getStore (params) {
  return request({
    url:'',
    method:'get',
    params
  })
}