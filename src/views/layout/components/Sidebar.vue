<template>
  <a-layout-sider :trigger="null" collapsible v-model="sidebarOpened" :class="{activeMenu: sidebarOpened}">
    <div class="logo" :class="{activeLogo: sidebarOpened}"></div>
    <a-menu
      class="menuStyle"
      theme="dark"
      mode="inline"
      @click="onClick"
      :defaultOpenKeys="defaultOpenKeys"
      v-model="currentSelectedKeys"
    >
    
      <a-menu-item key="/store/list">
        <i class="iconfont icon-jidi"></i>
        <span v-if="!sidebarOpened">公司管理</span>
      </a-menu-item>
      <a-menu-item key="/store/list">
        <i class="iconfont icon-jidi"></i>
        <span v-if="!sidebarOpened">公司信息</span>
      </a-menu-item>
      <a-sub-menu key="baseCenter" >
        <span slot="title"><i class="iconfont icon-jidi"></i><span v-if="!sidebarOpened">人员管理</span></span>
        <a-menu-item key="/baseCenter/list">应用管理</a-menu-item>
        <a-menu-item key="/baseCenter/list">组织机构</a-menu-item>
        <a-menu-item key="/baseCenter/list">员工管理</a-menu-item>
        <a-menu-item key="/baseCenter/list">部门管理</a-menu-item>
        <a-menu-item key="/baseCenter/list">角色管理</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="/store/list">
        <i class="iconfont icon-cangku"></i>
        <span v-if="!sidebarOpened">仓库管理</span>
      </a-menu-item>
      <a-menu-item key="/logistics/list">
        <i class="iconfont icon-svg03" style="font-size: 18px;"></i>
        <span v-if="!sidebarOpened">物流管理</span>
      </a-menu-item>
      <a-menu-item key="/client/list">
        <i class="iconfont icon-kehu"></i>
        <span v-if="!sidebarOpened">客户管理</span>
      </a-menu-item>
      <a-menu-item key="/client/list">
        <i class="iconfont icon-kehu"></i>
        <span v-if="!sidebarOpened">供应商管理</span>
      </a-menu-item>
      <a-menu-item key="/client/list">
        <i class="iconfont icon-kehu"></i>
        <span v-if="!sidebarOpened">订单管理</span>
      </a-menu-item>
      
    </a-menu>
  </a-layout-sider>
</template>

<script>
  
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'PageSider',
    data () {
      return {
        collapsed: false,
        currentSelectedKeys: [],
      }
    },
    watch: {
      $route: function (current) {
        this.currentSelectedKeys = [current.path]
      }
    },
    computed: {
      ...mapGetters(['sidebarOpened']),
      defaultOpenKeys: function () {
        let path = this.$route.path
        let paths = path.split('/')
        let _path = paths.filter(p => p)
        const _len = _path.length - 1 > 0 ? _path.length - 1 : _path.length
        return _path.splice(0, _len)
      }
    },
    mounted () {
      this.currentSelectedKeys = [this.$route.path]
      this.onResize()
    },
    methods: {
      ...mapActions(['toggleSideBar']),
      onClick (b) {
        event.preventDefault()
        this.$router.push(b.key)
      },
      onResize () {
        window.onresize = () => {
          if (window.innerWidth < 1200) {
            this.toggleSideBar(true)
          } else {
            this.toggleSideBar(false)
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .logo {
    height: 64px;
    position: relative;
    line-height: 64px;
    padding-left: 24px;
    transition: all .3s;
    overflow: hidden;
    // background: #002140 url("@") 23px center no-repeat;
    background-size: 60%;
  }

  .activeLogo {
    transition: all .3s;
    // background: #002140 url("../../../../assets/mini_logo.png") center center no-repeat;
    background-size: 38%;
  }

  .menuStyle {
    height: calc(100vh - 64px);
    overflow: auto;
  }

  .iconfont {
    min-width: 23px;
    display: inline-block;
  }

  .activeMenu {
    .iconfont {
      transition: all .2s;
      font-size: 20px !important;
    }
  }
</style>