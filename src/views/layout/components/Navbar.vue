<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon class="trigger" :type="sidebarOpened ? 'menu-unfold' : 'menu-fold'" @click="toggleSideBar"/>
    <span class="pageTitle">{{$route.meta.title}}</span>
    <div class="user-info">
      <a-dropdown>
        <a class="ant-dropdown-link" href="#">
        用户 <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item @click="edit">
            <a-icon type="edit"/> 修改密码
          </a-menu-item>
          <a-menu-item @click="logout">
            <a-icon type="logout"/> 退出登录
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
  name: 'PageHeader',
  data () {
    return {
      collapsed: true
    }
  },
  computed:{
    ...mapGetters(['sidebarOpened'])
  },
  methods: {
    ...mapActions(['toggleSideBar']),
    logout () {
      this.$router.push('/users/login')
    },
    edit () {
      this.$router.push('/users/login')
    }
  }
}
</script>

<style scoped>
.user-info {
  float: right;
  display: inline-block;
  padding-right: 24px;
}

.pageTitle {
  font-size: 16px;
  color: #7b6e6e;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

.trigger:hover {
  color: #1890ff;
  background-color: #f5f4f482;
}

</style>