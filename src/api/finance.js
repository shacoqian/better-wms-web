import request from '../utils/request'

/**
 * 客户滞纳费用
 * @param params
 * @returns {Promise<void>}
 */
export async function getDelayedCost (params) {
  return request({
    url: '/customerStoreLate',
    methods: 'get',
    params
  })
}

/**
 * 客户卸货费用
 * @param params
 * @returns {Promise<void>}
 */
export async function getDischargeCost (params) {
  return request({
    url: '/customerStoreIn',
    methods: 'get',
    params
  })
}

/**
 * 订单费用
 * @param params
 * @returns {Promise<void>}
 */
export async function getOrderCost (params) {
  return request({
    url: '/order',
    methods: 'get',
    params
  })
}