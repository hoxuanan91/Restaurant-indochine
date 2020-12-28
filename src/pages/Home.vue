<template>
  <div id="home-page">
    <Navbar />
    <Slideshow />
    <About />
    <TimeOpen />
    <Menu />

    <Reservation />
    <Location />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import Slideshow from "../components/Slideshow.vue"
import TimeOpen from "../components/TimeOpen.vue"
import About from "../components/About.vue"
import Reservation from "../components/Reservation.vue"
import Location from "../components/Location.vue"
import Footer from "../components/Footer.vue"
import Menu from "../components/Menu.vue"
import SmoothScroll from "smooth-scroll"
const listPage = [
  "home",
  "about-page",
  "menu-page",
  "reservation-page",
  "location-page",
]
export default {
  name: "Home",
  components: {
    Navbar,
    Slideshow,
    TimeOpen,
    About,
    Reservation,
    Location,
    Footer,
    Menu,
  },
  mounted() {
    new SmoothScroll('a[href*="#"]')
    let arrSection = listPage.map((page) => {
      return document.getElementById(page).offsetTop
    })
    let timer
    window.addEventListener("scroll", function() {
      this.clearTimeout(timer)
      timer = setTimeout(() => {
        let indexPage = listPage.length - 1
        for (let i = 0; i < listPage.length; i++) {
          if (window.scrollY + 85 < arrSection[i]) {
            indexPage = i - 1
            break
          }
        }
        Array.from(document.querySelectorAll(".item-nav > a")).forEach(
          (e, i) => {
            if (i !== indexPage) e.style.color = "white"
            else e.style.color = "#b8ab69"
          }
        )
      }, 300)
    })
  },
}
</script>

<style scoped lang="scss"></style>
