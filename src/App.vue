<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import {
  BNavbar,
  BNavbarNav,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavItem,
  BCarousel,
  BCarouselSlide,
} from "bootstrap-vue"
Vue.component("b-navbar", BNavbar)
Vue.component("b-navbar-nav", BNavbarNav)
Vue.component("b-navbar-brand", BNavbarBrand)
Vue.component("b-navbar-toggle", BNavbarToggle)
Vue.component("b-collapse", BCollapse)
Vue.component("b-nav-item", BNavItem)
Vue.component("b-carousel", BCarousel)
Vue.component("b-carousel-slide", BCarouselSlide)

// Install BootstrapVue
import "./scss/custom.scss"
import VueFbCustomerChat from "vue-fb-customer-chat"

Vue.use(VueFbCustomerChat, {
  page_id: 104292084909824,
  theme_color: "#b8ab69",
  locale: "en_US",
})
export default {
  name: "App",
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
@import url("./assets/css/responsive.css");
#app {
  font-family: "Alegreya Sans", sans-serif;
}
.carousel-inner {
  height: 100%;
}
.carousel-inner > .carousel-item {
  height: 100%;
}

#carousel-about li {
  width: 10px;
  height: 10px;
  border: 5px solid transparent;
  border-radius: 50%;
}
#carousel-reservation li {
  width: 10px;
  height: 10px;
  border: 5px solid transparent;
  border-radius: 50%;
  background-color: #b8ab69;
  outline-color: #b8ab69;
}

.carousel-control-prev,
.carousel-control-next {
  z-index: 60 !important;
}
</style>
