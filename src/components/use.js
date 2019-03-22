import Vue from 'vue'

import {
  Button,
  Layout,
  Menu,
  Icon,
  Dropdown,
  Form,
  Input,
  Table,
  Row,
  Col,
  Select,
  Tag,
  Modal,
  Upload,
  DatePicker,
  LocaleProvider,
  message,
  Cascader
} from 'ant-design-vue'

message.config({
  duration: 2,
  maxCount: 1,
});

Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(Form)
Vue.use(Input)
Vue.use(Table)
Vue.use(Row).use(Col)
Vue.use(Select)
Vue.use(Tag)
Vue.use(Modal)
Vue.use(Upload)
Vue.use(DatePicker)
Vue.use(LocaleProvider)
Vue.use(Cascader)
Vue.prototype.$message = message
Vue.prototype.$modal = Modal