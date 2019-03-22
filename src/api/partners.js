import request from '../utils/request'

/**
 * 合伙人
 * @param params
 */
export async function getPartners (params) {
  return request({
    url: '/partners',
    method: 'get',
    params
  })
}

export async function createPartners (params) {
  return request({
    url: '/partner/create',
    method: 'post',
    data: params
  })
}
