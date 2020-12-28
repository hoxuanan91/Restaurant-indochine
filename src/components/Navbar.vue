<template>
  <div>
    <b-navbar toggleable="lg" variant="dark" class="nav-header">
      <b-navbar-brand href="#home">
        <img src="../assets/images/logo.png" class="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav v-model="showCollapse">
        <b-navbar-nav class="nav-navbar">
          <b-nav-item href="#home" class="item-nav" @click="closeCollapse()"
            >HOME</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item
            href="#about-page"
            class="item-nav"
            @click="closeCollapse()"
            >ABOUT</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="nav-navbar">
          <b-nav-item
            href="#menu-page"
            class="item-nav"
            @click="closeCollapse()"
            >MENU</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="nav-navbar">
          <b-nav-item
            href="#reservation-page"
            class="item-nav"
            @click="closeCollapse()"
            >RESERVATION</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="nav-navbar">
          <b-nav-item
            href="#location-page"
            class="item-nav"
            @click="closeCollapse()"
            >LOCATION</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showCollapse: false,
    }
  },
  mounted() {
    window.temp = this
    let arrNavigation = Array.from(document.querySelectorAll(".item-nav > a"))
    arrNavigation.forEach((e, i) => {
      e.addEventListener("click", function() {
        arrNavigation.forEach((nav, j) => {
          if (i !== j) nav.style.color = "white"
          else {
            nav.style.color = "#b8ab69"
          }
        })
      })
    })
  },
  methods: {
    closeCollapse() {
      this.showCollapse = false
    },
  },
}
</script>

<style scoped lang="scss">
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: rgba(12, 12, 13, 0.9) !important;
  img.logo {
    width: 200px;
  }
  #nav-collapse {
    justify-content: flex-end;
    .item-nav > a {
      color: white;
      font-weight: 500;
      padding: 20px;
      font-size: 15px;
    }
    .item-nav:hover > a {
      color: #b8ab69 !important;
    }

    .nav-navbar:first-child .item-nav > a {
      color: #b8ab69;
    }
  }
}
</style>
