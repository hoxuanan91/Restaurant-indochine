<template>
  <div id="menu-page">
    <div class="title">Menu</div>
    <div class="content">
      We love restaurants as much as you do. That’s why we’ve been helping them
      fill tables since 1999. Welcome to elixir restaurant
    </div>
    <div class="image-wrapper">
      <div class="img-1" @click="openMenu()">
        <div class="layer-top">
          <div class="img-content">Entrée</div>
        </div>

        <div class="bg"></div>
      </div>
      <div class="img-2" @click="openMenu()">
        <div class="layer-top">
          <div class="img-content">Plats Grillées</div>
        </div>
        <div class="bg"></div>
      </div>
      <div class="img-3" @click="openMenu()">
        <div class="layer-top">
          <div class="img-content">Soupes</div>
        </div>
        <div class="bg"></div>
      </div>
      <div class="img-4" @click="openMenu()">
        <div class="layer-top">
          <div class="img-content">Deserts</div>
        </div>
        <div class="bg"></div>
      </div>
    </div>
    <div class="break-line"></div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  methods: {
    openMenu: function() {
      window.open("/menu", "_blank") //to open in new tab
    },
  },
}
</script>
<style scoped lang="scss">
#menu-page {
  padding-top: 75px;
  padding-bottom: 85px;

  background: #141313;
  .break-line {
    margin-top: 25px;
    text-align: center;
    height: 40px;
    background-image: url("../assets/images/ornament.png");
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
  }
  .title {
    text-align: center;
    font-size: 28px;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 40px;
    font-weight: 500;
    padding: 0px 10px;
  }
  .title::before,
  .title::after {
    content: url("../assets/images/header_decorator.png");
    margin: 0px 10px;
  }
  .content {
    text-align: center;
    font-family: "Alegreya Sans";
    font-size: 20px;
    color: #777777;
    margin-bottom: 60px;
    width: 45%;
    margin: auto;
    margin-bottom: 80px;
  }
  .image-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
    > div {
      width: 25%;
      height: 380px;
      background-position: center;
      background-size: cover;
      text-align: center;
      position: relative;
      cursor: pointer;
      .layer-top {
        padding-top: 120px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        > img {
          width: 90%;
          display: none;
        }
        .img-content {
          display: block;
          color: white;
          font-size: 30px;
          font-family: "Oswald", sans-serif;
          margin-top: 25px;
        }
      }

      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0000006e;
        z-index: 9;
        cursor: pointer;
        -webkit-transition: background-color 300ms linear;
        -ms-transition: background-color 300ms linear;
        transition: background-color 300ms linear;
      }
    }
    > div:hover .bg {
      background-color: #000000a6;
    }
    .img-1 {
      background-image: url("../assets/images/menu_1.jpg");
    }
    .img-2 {
      background-image: url("../assets/images/menu_2.jpg");
    }
    .img-3 {
      background-image: url("../assets/images/menu_3.jpg");
    }
    .img-4 {
      background-image: url("../assets/images/menu_4.jpg");
    }
  }

  .center {
    text-align: center;
    margin: 50px 0;
    .btn.btn-primary {
      border: none;
      outline: none;
      padding: 10px 20px;
      background-color: #b8ab69;
      color: white;
      font-weight: 500;
      border: 1px solid transparent;
      border-radius: 5px;
      transition: all 0.15s ease-in-out;
    }
    .btn.btn-primary:hover {
      border-color: #b8ab69 !important;
      color: #b8ab69 !important;
      background-color: white !important;
    }
  }
}
</style>
