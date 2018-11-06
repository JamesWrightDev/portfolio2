import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(Vuetify)
Vue.use(VueRouter)

const router = new VueRouter({
	routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})