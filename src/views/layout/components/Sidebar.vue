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
      <a-sub-menu key="baseCenter">
        <span slot="title"><i class="iconfont icon-jidi"></i><span v-if="!sidebarOpened">基地中心管理</span></span>
        <a-menu-item key="/baseCenter/list">基地中心</a-menu-item>
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
      <a-sub-menu key="internalBilling">
        <span slot="title"><i class="iconfont icon-jifeiguanlixitong"></i><span v-if="!sidebarOpened">内部计费</span></span>
        <a-menu-item key="/internalBilling/warehousing">仓储计费</a-menu-item>
        <a-menu-item key="/internalBilling/logistics/list">物流计费</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="finance">
        <span slot="title"><i class="iconfont icon-caiwu"></i><span v-if="!sidebarOpened">财务管理</span></span>
        <a-sub-menu key="clientCost" title="客户费用">
          <a-menu-item key="/finance/clientCost/order">订单费用</a-menu-item>
          <a-menu-item key="/finance/clientCost/delayed">滞纳费用</a-menu-item>
          <a-menu-item key="/finance/clientCost/discharge">卸货费用</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="clientBill" title="客户账单">
          <a-menu-item key="/finance/clientBill/list">账单</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="receivable" title="执行应收">
          <a-menu-item key="/finance/receivable/order">订单费用</a-menu-item>
          <a-menu-item key="/finance/receivable/delayed">滞纳费用</a-menu-item>
          <a-menu-item key="/finance/receivable/discharge">卸货费用</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="cope" title="执行应付">
          <a-menu-item key="/finance/cope/order">订单费用</a-menu-item>
          <a-menu-item key="/finance/cope/delayed">滞纳费用</a-menu-item>
          <a-menu-item key="/finance/cope/discharge">卸货费用</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="account">
        <span slot="title"><i class="iconfont icon-icon-test" style="font-size: 15px;"></i><span v-if="!sidebarOpened">账户管理</span></span>
        <a-menu-item key="/account">账户</a-menu-item>
      </a-sub-menu>
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