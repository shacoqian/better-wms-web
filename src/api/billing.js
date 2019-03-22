import request from '../utils/request'

/**
 * 仓储计费-列表
 * @param params
 * @returns {Promise<void>}
 */
export async function getWarehousingBill (params) {
  return request({
    url: '/customerStoreStrategy',
    method: 'get',
    params
  })
}

/**
 * 仓储计费-创建
 * @param params
 * @returns {Promise<void>}
 */
export async function createWarehousingBill (params) {
  return request({
    url: '/customerStoreStrategy/new',
    method: 'post',
    params
  })
}

/**
 * 仓储计费-修改
 * @param params
 * @returns {Promise<void>}
 */
export async function saveWarehousingBill (params) {
  return request({
    url: '/customerStoreStrategy/save',
    method: 'put',
    params
  })
}

/**
 * 仓储计费-删除
 * @param params
 * @returns {Promise<void>}
 */
export async function deleteWarehousingBill (params) {
  return request({
    url: '/customerStoreStrategy/delete',
    method: 'delete',
    params
  })
}

/**
 * 物流计费-列表
 * @param params
 * @returns {Promise<void>}
 */
export async function getWlBilling (params) {
  return request({
    url: '/customerWlTemplet',
    method: 'get',
    params
  })
}

/**
 * 物流计费-创建
 * @param params
 * @returns {Promise<void>}
 */
export async function createWlBilling (params) {
  return request({
    url: '/customerWlTemplet/new',
    method: 'post',
    params
  })
}
/**
 * 物流计费-删除
 * @param params
 * @returns {Promise<void>}
 */
export async function deleteWlBilling (params) {
  return request({
    url: '/customerWlTemplet/delete',
    method: 'delete',
    params
  })
}
/**
 * 物流计费-查看
 * @param params
 * @returns {Promise<void>}
 */
export async function checkWlBilling (params) {
  return request({
    url: '/customerWlProduct',
    method: 'get',
    params
  })
}

/**
 * 物流计费-修改
 * @param params
 * @returns {Promise<void>}
 */
export async function saveWlBilling (params) {
  return request({
    url: '/customerWlTemplet/save',
    method: 'put',
    params
  })
}
