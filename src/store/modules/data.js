import { getPartners } from '@/api/partners'
import { getStore } from '@/api/store'

const data = {
  state: {
    partners: [],
    store: [{
      'is_canyou_store': 2,
      'store_name': '杭州常温仓',
      'shop_code': '209809700069',
      'store_code': '2033017805',
      'owned_city_name': '杭州市',
      'owned_city_id': '122',
      'region_id': '12,122,1301',
      'region_name': '浙江省/杭州市/江干区',
      'address': '一号线附近',
      'contact_people': '张三',
      'contact_phone': '13900000000',
      'stay_warm_type': 10,
      'contact_service': '13988888888',
      'updated_time': '2018-09-30T02:00:33.000Z'
    }, {
      'is_canyou_store': 2,
      'store_name': '杭州冷冻仓',
      'shop_code': '209809700069',
      'store_code': '2058694605',
      'owned_city_name': '杭州市',
      'owned_city_id': '122',
      'region_id': '12,122,1300',
      'region_name': '浙江省/杭州市/下城区',
      'address': '2号线附近',
      'contact_people': '李四',
      'contact_phone': '13900000000',
      'stay_warm_type': 20,
      'contact_service': '13899999999',
      'updated_time': '2018-07-24T07:32:21.000Z'
    }, {
      'is_canyou_store': 2,
      'store_name': '合肥常温仓',
      'shop_code': '209809700069',
      'store_code': '2075386927',
      'owned_city_name': '合肥市',
      'owned_city_id': '133',
      'region_id': '13,133,1400',
      'region_name': '安徽省/合肥市/瑶海区',
      'address': '瑶海大街',
      'contact_people': '高晋升',
      'contact_phone': '18888888888',
      'stay_warm_type': 10,
      'contact_service': '18888888888',
      'updated_time': '2018-07-24T10:00:14.000Z'
    }, {
      'is_canyou_store': 2,
      'store_name': '合肥冷冻仓',
      'shop_code': '209809700069',
      'store_code': '2096115737',
      'owned_city_name': '合肥市',
      'owned_city_id': '133',
      'region_id': '13,133,1402',
      'region_name': '安徽省/合肥市/蜀山区',
      'address': '合肥',
      'contact_people': '安全',
      'contact_phone': '18888888888',
      'stay_warm_type': 20,
      'contact_service': '123456',
      'updated_time': '2018-08-04T07:24:56.000Z'
    }, {
      'is_canyou_store': 1,
      'store_name': '本地仓库1',
      'shop_code': '209809700069',
      'store_code': '1066198568',
      'owned_city_name': '',
      'owned_city_id': '',
      'region_id': '2,33,378',
      'region_name': '北京市/北京市/东城区',
      'address': '4645646456',
      'contact_people': '31231231',
      'contact_phone': '13333333333',
      'stay_warm_type': null,
      'contact_service': '34234234234',
      'updated_time': '2018-12-10T13:55:05.000Z'
    }, {
      'is_canyou_store': 1,
      'store_name': '萧山仓库',
      'shop_code': '209809700069',
      'store_code': '1039180448',
      'owned_city_name': '',
      'owned_city_id': '',
      'region_id': '12,122,1305',
      'region_name': '浙江省/杭州市/萧山区',
      'address': '振宁路111号',
      'contact_people': '张三',
      'contact_phone': '13111111111',
      'stay_warm_type': null,
      'contact_service': '131111111111',
      'updated_time': '2019-01-02T09:44:33.000Z'
    }]
  },
  mutations: {
    TOGGLE_PARTNERS: (state, data) => {
      state.partners = data
    },
    TOGGLE_STORE: (state, data) => {
      state.store = data
    },
  },
  actions: {
    getPartners ({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (Array.isArray(state.partners) && state.partners.length > 0) {
          resolve(state.partners)
        } else {
          getPartners().then(res => {
            resolve(res.data)
            commit('TOGGLE_PARTNERS', res.data)
          }).catch(() => {
            reject()
          })
        }
      })
    },
    getStore ({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (Array.isArray(state.store) && state.store.length > 0) {
          resolve(state.store)
        } else {
          getStore().then(res => {
            resolve(res.data)
            commit('TOGGLE_STORE', res.data)
          }).catch(() => {
            reject()
          })
        }
      })
    }
  }
}

export default data