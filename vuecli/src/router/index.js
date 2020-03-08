import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: "/",
		redirect: '/shouye'
	},
	{
		path: '/shouye',
		name: 'Shouye',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "shouye" */ '../views/Shouye.vue'),
	},
	{
		path: '/faxian',
		name: 'Faxian',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "faxian" */ '../views/Faxian.vue'),
		children: [{
				"path": "/",
				redirect: 'mytuijian'
			},
			{
				"path": 'mytuijian',
				name: "mytuijian",
				component: () => import( /* webpackChunkName: "mytuijian" */ '../views/Mytuijian.vue')
			},
			{
				"path": 'myguanzhu',
				name: "myguanzhu",
				component: () => import( /* webpackChunkName: "myguanzhu" */ '../views/Myguanzhu.vue')
			},
			{
				"path": 'mytongcheng',
				name: "mytongcheng",
				component: () => import( /* webpackChunkName: "mytongcheng" */ '../views/Mytongcheng.vue')
			},
		]
	},
	{
		path: '/xiaoxi',
		name: 'Xiaoxi',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "xiaoxi" */ '../views/Xiaoxi.vue')
	},
	{
		path: '/wode',
		name: 'Wode',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "wode" */ '../views/Wode.vue')
	},
	{
		path: '/myneirong/:pro_id',
		name: 'Myneirong',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "myneirong" */ '../views/Myneirong.vue'),
	},
	{
		path: '/jiaolianzhaomu',
		name: 'Jiaolianzhaomu',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "jiaolianzhaomu" */ '../views/Jiaolianzhaomu.vue'),
	},
	{
		path: '/fenleidaohang/:id',
		name: 'Fenleidaohang',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "fenleidaohang" */ '../views/Fenleidaohang.vue'),
		children: [{
				"path": "/",
				redirect: 'fenleikecheng'
			},
			{
				"path": 'fenleikecheng',
				name: "fenleikecheng",
				component: () => import( /* webpackChunkName: "fenleikecheng" */ '../views/Fenleikecheng.vue')
			},
			{
				"path": 'fenleijiaoxuediao',
				name: "fenleijiaoxuediao",
				component: () => import( /* webpackChunkName: "fenleijiaoxuedian" */ '../views/Fenleijiaoxuediao.vue')
			},
			{
				"path": 'fenleijiaolian',
				name: "fenleijiaolian",
				component: () => import( /* webpackChunkName: "fenleijiaolian" */ '../views/Fenleijiaolian.vue')
			},
		]
	},
]

const router = new VueRouter({
	routes
})

export default router
