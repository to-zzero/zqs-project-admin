import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
import '@/components'

import {
  Form,
  FormItem,
  Button,
  Radio,
  RadioGroup,
  Switch,
  Input,
  InputNumber,
  Select,
  Option,
  Icon,
  Checkbox,
  CheckboxGroup,
  Upload,
  Table,
  TableColumn,
  Dialog,
  Tooltip,
  // MessageBox,
  Alert,
  Loading,
  Pagination,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Progress,
  Scrollbar,
  DatePicker,
  Menu,
  MenuItem,
  Submenu,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'

Vue.use(DatePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Switch)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Icon)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Upload)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Progress)
Vue.use(Alert)
Vue.use(Scrollbar)
Vue.use(Loading.directive)
Vue.use(Pagination)
// Vue.use(MessageBox)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

// Vue.use(ElementUI)

Vue.config.productionTip = false
console.log(router, store)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
