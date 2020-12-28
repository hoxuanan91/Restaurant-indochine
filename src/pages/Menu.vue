<template>
  <div class="page-view">
    <div class="image-container">
      <img v-for="(src, index) in listImage" :key="index" v-lazy="src" />
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import VueLazyload from "vue-lazyload"

Vue.use(VueLazyload)
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
})
export default {
  name: "Menu",
  data() {
    return {
      listImage: [
        "/Menu/p1.jpg",
        "/Menu/p2.jpg",
        "/Menu/p3.jpg",
        "/Menu/p4.jpg",
        "/Menu/p5.jpg",
        "/Menu/p6.jpg",
        "/Menu/p7.jpg",
        "/Menu/p8.jpg",
        "/Menu/p9.jpg",
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.page-view {
  img {
    width: 100%;
  }
}
</style>
