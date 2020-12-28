<template>
  <div id="location-page" page="location">
    <div class="title">Location</div>
    <div class="content">
      W325 State Road 123 Mondovi, WI (Wisconsin) 98746-54321
    </div>
    <div class="break-line"></div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          height="440"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Hightland&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          style="width: 100%"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Location",
}
</script>

<style scoped lang="scss">
#location-page[page="location"] {
  padding-top: 75px;
    background: #141313;

  .break-line {
    text-align: center;
    height: 40px;
    background-image: url("../assets/images/ornament.png");
    background-repeat: no-repeat;
    margin-bottom: 30px;
    background-position: center;
    margin-top: 30px;
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
  }
  .mapouter {
    position: relative;
    text-align: right;
    height: 380px;
    width: 100%;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 440px;
    width: 100%;
  }
}
</style>
