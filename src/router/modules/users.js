import BlankLayout from '@/views/layout/BlankLayout.vue'

export default  {
  path: '/users',
  component: BlankLayout,
  redirect: '/users/login',
  hidden: true,
  children: [
    {
      path: 'login',
      name: 'login',
      component: resolve => require(['@/views/users/Login.vue'], resolve),
    }
  ]
}