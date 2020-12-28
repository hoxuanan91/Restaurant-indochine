<template>
  <div id="home">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      controls
      :interval="4000"
      background="#ababab"
      img-width="100%"
      label-next=""
      label-prev=""
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div id="bg-carousel"></div>
      <b-carousel-slide>
        <template #img>
          <div class="image-container img-1"></div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="image-container img-2"></div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="image-container img-3"></div>
        </template>
      </b-carousel-slide>

      <div class="slide-place-holder">
        <img src="../assets/images/vn_girl.png" class="logo" />
        <VerticalCarousel :listContent="listContent" />
        <div class="separator">
          <img src="../assets/images/slide-separator.png" alt="" />
        </div>
        <div class="sub-title">Numéro 1 dans 13 ème</div>
      </div>
    </b-carousel>
  </div>
</template>

<script>
import VerticalCarousel from "./VerticalCarousel"
export default {
  name: "Slideshow",
  components: { VerticalCarousel },
  data() {
    return {
      slide: 0,
      sliding: null,
      listContent: [
        "L'âme de la gastronomie asiatique",
        "Le resto asiatique",
        "Bienvenue à l'indochine",
      ],
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>

<style scoped lang="scss">
.slide-place-holder {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  width: 80%;
  left: 10%;
  height: 100%;
  text-align: center;
  img {
    margin-top: 90px;
    width: 150px;
    height: auto;
  }
  .separator {
    width: 100%;
    height: 40px;
    img {
      margin-top: 4px;
    }
  }
  .sub-title {
    line-height: 10px;
    font-size: 24px;
    color: #fff;
    text-align: center;
    font-family: "Alegreya Sans", serif;
    font-style: italic;
    position: relative;
    left: 0px;
    width: 100%;
  }
}
#carousel-1 {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  #bg-carousel {
    z-index: 50;
    background-color: #0000006b;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .image-container {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  .image-container.img-1 {
    background-image: url("../assets/images/slide_1.jpg");
  }
  .image-container.img-2 {
    background-image: url("../assets/images/slide_2.jpg");
  }
  .image-container.img-3 {
    background-image: url("../assets/images/slide_3.jpg");
  }
  .img-slideshow {
    width: 100%;
    height: auto;
  }
}
</style>
