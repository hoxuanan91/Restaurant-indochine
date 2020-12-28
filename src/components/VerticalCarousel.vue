<template>
  <div id="vertical-carousel">
    <div class="my-vertical-carousel" ref="vertical" id="vertical">
      <div class="items" v-for="(content, index) in listContent" :key="index">
        <h4>{{ content }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VerticalCarousel",
  components: {},
  props: ["listContent"],
  mounted() {
    let index = 0;
    setInterval(() => {
      let items = this.$refs["vertical"].querySelectorAll(".items")
      let nextIndex = index + 1 >= this.listContent.length ? 0 : index + 1;
      items[index].style.top = "100px"
      setTimeout(() => {
        items[nextIndex].style.top = "0"
      }, 500)

      index = nextIndex
    }, 3000)
  },
}
</script>
<style lang="scss" scoped>
#vertical-carousel {
  margin-top: 60px;
  .my-vertical-carousel {
    height: 60px;
    width: 100%;
    overflow: hidden;
    position: relative;
    .items {
      position: absolute;
      left: 0;
      top: 100px;
      height: 100%;
      width: 100%;
      text-align: center;
      overflow: hidden;
      transition: all 0.5s ease-in-out;
      h4 {
        font-family: "Alegreya Sans", sans-serif;
        font-size: 3.3em;
        text-align: center;
        font-weight: 300;
        color: #fff;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 4px;
        line-height: 60px;
      }
    }
    .items:first-child {
      top: 0;
    }
  }
}
</style>
