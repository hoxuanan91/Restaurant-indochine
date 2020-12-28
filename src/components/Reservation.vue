<template>
  <div id="reservation-page" page="reservation">
    <div class="title">Reservations</div>
    <div class="content">
      Booking a table has never been so easy with free & instant online
      restaurant reservations, booking now!!
    </div>
    <div class="section-deliver">
      <a href="https://deliveroo.fr/backlinks/11834" target="_blank"
        ><img
          alt="Vos restaurants de quartier prêts pour vous livrer.
Commandez dès aujourd'hui !"
          src="../assets/images/deliveroo.png"
      /></a>

      <a><img alt="Uber food" src="../assets/images/uber.png"/></a>
    </div>
    <div class="break-line"></div>

    <!--     
    <div class="carousel" id="reservation-carousel">
      <div class="content-carousel">
        <div class="header-carousel">
          <h2>TESTIMONIAL</h2>
          <h1>”</h1>
        </div>
        <b-carousel
          id="carousel-reservation"
          img-height="300px"
          image
          indicators
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide class="reservation-template">
            <template #img>
              <div class="comment">
                “Your designs were exactly what Josef had always imagined —
                clear, clean, continuous, with a focus on stylistic elements. It
                was a major help for us. Thank you so much for your work on this
                project."
              </div>
              <div class="author">Carolyn Meyer</div>
            </template>
          </b-carousel-slide>

          <b-carousel-slide class="reservation-template">
            <template #img>
              <div class="comment">
                "Awesome to work with. Incredibly organized, easy to communicate
                with, responsive with next iterations, and beautiful work. It’s
                great to work with someone so open-minded and responsive. Thank
                you!"
              </div>
              <div class="author">John Berthier</div>
            </template>
          </b-carousel-slide>

          <b-carousel-slide class="reservation-template">
            <template #img>
              <div class="comment">
                Applicake chocolate cake wafer toffee pie soufflé wafer. Tart
                marshmallow wafer macaroon cheesecake jelly. Gingerbread cookie
                soufflé sweet roll sweet roll jelly-o.
              </div>
              <div class="author">Alexander Smith</div>
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Reservation",
}
</script>

<style scoped lang="scss">
#reservation-page {
  padding-top: 75px;
  padding-bottom: 75px;
  .section-deliver {
    width: 50%;
    margin: auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    a {
      height: 132px;
      width: 132px;
      img {
        height: 100%;
      }
    }
  }
  .break-line {
    text-align: center;
    height: 30px;
    background-image: url("../assets/images/ornament.png");
    background-repeat: no-repeat;
    
    background-position: center;
    
    opacity: 0;
  }
  .title {
    text-align: center;
    font-size: 28px;
    color: #383733;
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
  }

  .carousel#reservation-carousel {
    width: 100%;
    background-image: url("../assets/images/reservation.jpg");
    min-height: 518px;
    background-position: 50% 50% !important;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    .content-carousel {
      height: 388px;
      padding-top: 30px;
      .header-carousel {
        color: #b8ab69;
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 30px;
        padding: 0 30px;
        position: relative;
        height: 57px;
        h2::after {
          content: "";
          left: 35px;
          width: 50px;
          height: 3px;
          background: white;
          position: absolute;
          bottom: -5px;
          z-index: 50;
        }
        h1 {
          font-size: 2.5em;
        }
      }
      #carousel-reservation {
        height: 95%;
        min-height: 95% !important;
        margin-top: 5%;
        .reservation-template {
          padding: 0 15%;
        }
        .comment {
          font-family: "Alegreya Sans", sans-serif;
          text-align: left;
          font-weight: 400;
          color: #e2e9ed;
          font-size: 25px;
          line-height: 1.8em;
          margin-top: 30px;
          margin-bottom: 30px;
        }
        .author {
          color: #b8ab69;
          font-family: "Alegreya Sans Black", sans-serif;
          font-style: italic;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
