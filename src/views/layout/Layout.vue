<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <Sidebar/>
    <a-layout>
      <Navbar/>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view/>
      </a-layout-content>
      <!-- <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<script>
  import { Navbar, Sidebar } from './components'
  // import { Layout } from 'ant-design-vue'
  export default {
    name: 'Layout',
    components: {
      Navbar,
      Sidebar
    }
  }
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  height: 100vh;
}