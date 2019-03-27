import BlankLayout from '@/views/layout/BlankLayout.vue'

export default  {
  path: '/company',
  component: BlankLayout,
  redirect: '/company/list',
  hidden: true,
  children: [
    {
      path: 'list',
      component: resolve => require(['@/views/company/List.vue'], resolve),
    }
  ]
}