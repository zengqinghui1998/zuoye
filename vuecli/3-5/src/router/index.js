import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{path:"/",redirect:'/shouye'},
  {
    path: '/shouye',
    name: 'Shouye',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shouye" */ '../views/Shouye.vue'),
  },
  {
    path: '/faxian',
    name: 'Faxian',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "faxian" */ '../views/Faxian.vue')
  },
  {
    path: '/xiaoxi',
    name: 'Xiaoxi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "xiaoxi" */ '../views/Xiaoxi.vue')
  },
  {
    path: '/wode',
    name: 'Wode',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wode" */ '../views/Wode.vue')
  },
  {
    path: '/myneirong/:pro_id',
    name: 'Myneirong',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "myneirong" */ '../views/Myneirong.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
