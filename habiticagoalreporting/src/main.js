import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HabiticaApiExplorer from './components/HabiticaApiExplorer'
import HelloWorld from './components/HelloWorld'
import TreeView from "vue-json-tree-view"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(TreeView)

const routes = [
  {
    name: "HabiticaApiExplorer",
    path: "/ApiTest",
    component: HabiticaApiExplorer
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
