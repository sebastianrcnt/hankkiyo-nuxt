import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c6843fa = () => interopDefault(import('../pages/address.vue' /* webpackChunkName: "pages/address" */))
const _4a6a59dd = () => interopDefault(import('../pages/categories.vue' /* webpackChunkName: "pages/categories" */))
const _f30c7c40 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _109278f3 = () => interopDefault(import('../pages/stores.vue' /* webpackChunkName: "pages/stores" */))
const _0ec00f4b = () => interopDefault(import('../pages/store/_name.vue' /* webpackChunkName: "pages/store/_name" */))
const _c60884be = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2c6843fa,
    name: "address"
  }, {
    path: "/categories",
    component: _4a6a59dd,
    name: "categories"
  }, {
    path: "/home",
    component: _f30c7c40,
    name: "home"
  }, {
    path: "/stores",
    component: _109278f3,
    name: "stores"
  }, {
    path: "/store/:name?",
    component: _0ec00f4b,
    name: "store-name"
  }, {
    path: "/",
    component: _c60884be,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
