import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
import VueRouter from 'vue-router'
import Routes from './routes.js'
import vueSmoothScroll from 'vue2-smooth-scroll'


Vue.use(vueSmoothScroll)

Vue.use(Vuetify,{
  theme: {
    primary: '#2F4F4F',
    secondary: '#2DAC8C',
    accent: '#8c9eff',
    error: '#b71c1c'
  },
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'

})
Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
	routes: Routes,
  mode: 'history'
  
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})