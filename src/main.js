import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

import store from "./store"
Vue.use(Vant);

Vue.config.productionTip = false

Vue.use(Vant);

// 引入
import './assets/css/reset.css'//重置样式
import './assets/js/rem'//
import './components'//公共组件
import './filters/index'//过滤器


new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
