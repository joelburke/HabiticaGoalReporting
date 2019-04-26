import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HabiticaApiTest from './components/HabiticaApiTest'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  {
    name: "HabiticaApiTest",
    path: "/ApiTest",
    component: HabiticaApiTest
  },
  {
    name: "HelloWorld",
    path: "/HelloWorld",
    component: HelloWorld
  },
]

const router = new VueRouter({ mode: 'history', routes: routes });


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
