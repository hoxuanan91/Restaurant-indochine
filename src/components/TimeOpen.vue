<template>
  <div id="time-open">
    <div id="content-container">
      <div class="content">
        <div class="header">
          <img src="../assets/images/timetable1.png" />
          <span>HORAIRES D’OUVERTURE</span>
          <img src="../assets/images/timetable2.png" />
        </div>
        <div class="sub-title">
          Merci de nous appeler pour la réservation
        </div>
        <div class="timing">
          <div class="france">
            Lundi à Vendredi
            <div class="time">
              <div class="from">09:00</div>
              <div class="to">24:00</div>
            </div>
          </div>
          <div class="space"></div>
          <div class="france">
            Weekend et dimanche
            <div class="time">
              <div class="from">08:00</div>
              <div class="to">03:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeOpen",
}
</script>

<style scoped lang="scss">
#time-open {
  width: 100%;
  background-image: url("../assets/images/facade.jpg");
  min-height: 528px;
  background-position: 50% 50% !important;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-top: 5px;
  #content-container {
    .content {
      height: 488px;
      text-align: center;
      .header {
        padding-top: 20px;
        color: #ffffff;
        font-family: "Oswald", sans-serif;
        font-size: 39px;
        font-weight: 700;
      }
      .sub-title {
        color: #b8ab69;
        font-family: "Alegreya Sans Light";
        font-size: 21px;
        margin-bottom: 5px;
        margin-top: -40px;
        text-shadow: 1px 1px 2px rgba(147, 150, 150, 1);
      }
      .timing {
        display: flex;
        flex-flow: wrap;
        width: 600px;
        margin: auto;
        justify-content: space-between;
        height: 80%;
        .france {
          font-size: 48px;
          font-style: italic;
          font-weight: 500;
          color: #b8ab69;
          text-align: center;
          width: 250px;
          line-height: 56px;
          .time {
            color: white;
            font-style: normal;
            font-weight: 400;
            font-size: 34px;
            font-family: "Oswald", sans-serif;
          }
        }
      }
      .space {
        background-image: url("../assets/images/divider.png");
        width: 20px;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
