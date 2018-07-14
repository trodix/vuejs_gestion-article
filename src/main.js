import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueResource)
Vue.use(VueRouter)

// filters
Vue.filter('to-uppercase', function(value) {
  console.log(value)
  if (!value) return '';
  return value.toUpperCase();
});

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
