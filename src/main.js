import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/theme/theme-green/index.css'
// import store from './vuex/store'
import store from './store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'

// import Mock from './mock'
// Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

import router from './routes/router'
import VModal from 'vue-js-modal'
import Myecharts from './component/Myecharts'


Vue.use(Myecharts)
Vue.use(VModal)
Vue.use(ElementUI)

Vue.use(Vuex)

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App },
  render: h => h(App)
}).$mount('#app')
