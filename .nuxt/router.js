import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _33393284 = () => interopDefault(import('../pages/address.vue' /* webpackChunkName: "pages/address" */))
const _144729bc = () => interopDefault(import('../pages/categories.vue' /* webpackChunkName: "pages/categories" */))
const _6aaba4ff = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _a04fdf5c = () => interopDefault(import('../pages/stores.vue' /* webpackChunkName: "pages/stores" */))
const _ff058968 = () => interopDefault(import('../pages/store/_name.vue' /* webpackChunkName: "pages/store/_name" */))
const _3f063e62 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _33393284,
    name: "address"
  }, {
    path: "/categories",
    component: _144729bc,
    name: "categories"
  }, {
    path: "/home",
    component: _6aaba4ff,
    name: "home"
  }, {
    path: "/stores",
    component: _a04fdf5c,
    name: "stores"
  }, {
    path: "/store/:name?",
    component: _ff058968,
    name: "store-name"
  }, {
    path: "/",
    component: _3f063e62,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
