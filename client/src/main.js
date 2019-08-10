import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePlyr)
Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
