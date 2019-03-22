import Vue from 'vue'
import Router from 'vue-router'
import routers from './modules/main'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({y: 0}),
  routes: routers
})



router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.length === 0) {
    next({
      path: '/404',
      query: {redirect: to.fullPath}
    })
  } else{
    next()
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router