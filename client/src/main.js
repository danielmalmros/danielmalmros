import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import VuePageTransition from 'vue-page-transition'
import VueAnalytics from 'vue-analytics'

const isProd = process.env.NODE_ENV === 'production';

Vue.use(VuePlyr)
Vue.use(VuePageTransition)
Vue.use(VueAnalytics, {
  id: "UA-148963191-1",
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
