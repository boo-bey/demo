import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/common/reset.css'
import './plugins/vant.js'
import echarts from './plugins/echarts'




Vue.use(echarts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
