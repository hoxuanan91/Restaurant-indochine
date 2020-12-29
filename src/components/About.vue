<template>
  <div id="about-page">
    <div class="title">About</div>
    <div class="content">
      We love restaurants as much as you do. That’s why we’ve been helping them
      fill tables since 1999. Welcome to elixir restaurant
    </div>
    <div class="content-left">
      <h2>The History</h2>
      <div class="text">
        The <strong>History of Kitchens TEST</strong> and Cooks gives further
        intimation on Mr Boulanger usual menu, stating confidently that
        «&nbsp;Boulanger served salted poultry and fresh eggs, all presented
        without a tablecloth on small marble tables&nbsp;». Numerous
        commentators have also referred to the supposed restaurant owner’s
        eccentric habit of touting for custom outside his establishment, dressed
        in aristocratic fashion and brandishing a sword
        <p></p>
        <p>
          According to Miss Spang, there is not a shred of evidence for any of
          it. She said: These legends just get passed on by hearsay and then
          spiral out of control. Her interest in
          <strong>Boulanger</strong> dates back to a history of food seminar in
          Paris in the mid-1990s
        </p>
      </div>
      <div class="break-line"></div>
    </div>
    <div class="content-full">
      <div class="text">
        The <strong>History of Kitchens</strong> and Cooks gives further
        intimation on Mr Boulanger&nbsp;usual menu, stating confidently that
        «&nbsp;Boulanger served salted poultry and&nbsp;fresh eggs, all
        presented without a tablecloth on small marble
        tables&nbsp;».&nbsp;Numerous commentators have also referred to the
        supposed restaurant&nbsp;owner’s eccentric habit of touting for custom
        outside his establishment,&nbsp;dressed in aristocratic fashion and
        brandishing a sword
        <p></p>
        <p>
          According to Miss Spang, there is not a shred of evidence for any of
          it. She said: These legends just get passed on by hearsay and then
          spiral out of control. Her interest in
          <strong>Boulanger</strong> dates back to a history of food seminar in
          Paris in the mid-1990s
        </p>
        <div class="break-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
}
</script>

<style scoped lang="scss">
#about-page {
  padding-top: 75px;
  background-image: url("../assets/images/menu_left.jpg"),
    url("../assets/images/menu_right.jpg");
  background-position: top left, top right;

  background-repeat: no-repeat;
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
  .content-left {
    width: 55%;
    margin: 28px auto;
    text-align: center;
    h2 {
      color: #b8ab69;
      font-family: "Alegreya Sans", serif;
      font-size: 38px;
      margin-bottom: 30px;
      text-align: center;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      font-weight: 400;
    }
  }

  .content-full {
    width: 55%;
    margin: 28px auto;
  }
  .text {
    font-family: "Alegreya Sans", serif;
    font-size: 18px;
    color: #4f4e49;
    line-height: 30px;
    font-weight: 400;
    text-align: center;
    strong {
      color: #b8ab69;
      font-weight: 500;
    }
  }
  .break-line {
    text-align: center;
    height: 40px;
    background-image: url("../assets/images/ornament.png");
    background-repeat: no-repeat;
    margin-bottom: 20px;
    background-position: center;
    opacity: 0;
  }
  #carousel-about {
    width: 75%;
    height: 300px;
    margin: auto;
    img {
      width: 100%;
    }
    li {
      width: 10px;
      height: 10px;
      border: 5px solid transparent;
      border-radius: 50%;
    }
  }
}
</style>
