<template>
  <div>
    <div class="handle-wrap t-r">
      <a-button type="primary" @click="handleChange('add')">新增</a-button>
      <div class="t-l">
      <a-input class="w200 mar-r10" placeholder="输入仓库名称"/>
      <a-button type="primary" icon="search">搜索</a-button>
      </div>
    </div>
    <a-table 
      :columns="columns"
      :dataSource="data"
      :pagination="{ pageSize: 50,showSizeChanger:true}"
      :scroll="{ y: 'calc(100vh - 365px)', x:1100 }"
    >
      <!-- <a slot="action"  href="javascript:;">action</a> -->
    </a-table>
  </div>
</template>
<script>
const columns = [
  { 
    title: '公司名称', 
    width:  '15%',
    dataIndex: 'company_name', 
  },
  { 
    title: '联系人', 
    width: '10%' ,
    dataIndex: 'contact_name', 
  },
  { 
    title: '联系方式', 
    width: '15%' ,
    dataIndex: 'contact_number', 
  },
  { 
    title: '手机', 
    width: '15%' ,
    dataIndex: 'telphone', 
  },
  { 
    title: '邮箱', 
    width: '20%' ,
    dataIndex: 'email', 
  },
  { 
    title: '创建人', 
    width: '10%' ,
    dataIndex: 'creator_name', 
  },
  { 
    title: '创建时间', 
    width: '20%' ,
    dataIndex: 'created_at', 
  },
  {
    title: '操作',
    key: 'operation',
    width: '20%',
    fixed: 'right',
    // scopedSlots: { customRender: '操作' },
  },
];

const data = [];
data.push({
  key: 1,
  company_name: '杭州餐友供应链管理有限公司',
  contact_name: '小钱',
  contact_number: '13916359545',
  telphone: '13916359545',
  email: 'qianfeng5511@163.com',
  creator_name: '前锋',
  created_at: '2019-03-03 11:11:11'
})

data.push({
  key: 2,
  company_name: '小小公司',
  contact_name: '小钱',
  contact_number: '13916359545',
  telphone: '13916359545',
  email: 'qianfeng5511@163.com',
  creator_name: '前锋',
  created_at: '2019-03-03 11:11:11'
})
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

export default {
  data() {
    return {
      data,
      columns,
    }
  },
  methods: {
    
  }
}
</script>