import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "Category" */ '../views/Category.vue'),
    children: [
      {
        name: 'add',
        path: 'add',
        component: () => import(/* webpackChunkName: "Category" */ '../views/Category.vue')
      },
      {
        name: 'edit',
        path: 'edit/:id',
        component: () => import(/* webpackChunkName: "Category" */ '../views/Category.vue'),
      },
      {
        name: 'view',
        path: 'view/:id',
        component: () => import(/* webpackChunkName: "Category" */ '../views/Category.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
