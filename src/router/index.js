import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RouterLink from '../views/RouterLink.vue'
import RLS from '../views/RouterLink.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jump',
    name: 'RouterLink',
    component:RouterLink
  },
  {
    path: '/RLS',
    name: 'RLS',
    component:RLS
}
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
