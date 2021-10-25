import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/swiper-bundle.css'

// Vue.config.productionTip = false
fastClick.attach(document.body)
// Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */

// new Vue({
//   router,
//   store,
//   render: h =>h(App)
// }).$mount('#app')
createApp(App).use(store).use(router).use(VueAwesomeSwiper).mount('#app')