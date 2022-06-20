import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _477f8ff8 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6c507c71 = () => interopDefault(import('../pages/linktree.vue' /* webpackChunkName: "pages/linktree" */))
const _c15efabe = () => interopDefault(import('../pages/tracks.vue' /* webpackChunkName: "pages/tracks" */))
const _080fda6e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _477f8ff8,
    name: "about"
  }, {
    path: "/linktree",
    component: _6c507c71,
    name: "linktree"
  }, {
    path: "/tracks",
    component: _c15efabe,
    name: "tracks"
  }, {
    path: "/",
    component: _080fda6e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
