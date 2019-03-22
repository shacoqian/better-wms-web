import Layout from '@/views/layout/Layout.vue'

import users from './users'
// import account from './account'
// import baseCenter from './baseCenter'
// import client from './client'
// import exception from './exception'
// import finance from './finance'
// import internalBilling from './internalBilling'
// import logistics from './logistics'
// import store from './store'

export default [
  {
    path: '/',
    name: 'index',
    component: Layout,
    meta: { title: '首页' },
    children: [
      // baseCenter,
      // store,
      // logistics,
      // client,
      // internalBilling,
      // finance,
      // account
    ]
  },
  users,
  // exception
]