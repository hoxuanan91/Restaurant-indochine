/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./pages/Home.vue"),
    },
    {
      path: "/menu",
      component: () => import("./pages/Menu.vue"),
      name: "menu",
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
})

export default router
