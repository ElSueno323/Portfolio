<script setup lang="ts">

</script>

<template>

  <div class="container" id="home">
    <div class="container_top_left">
      <h2>
        {{  $i18n.messages.msg.translation.content.greeting.title }}
      </h2>
      <h1>
        {{  $i18n.messages.msg.translation.content.greeting.name }}
        <span class="colored">
          {{$i18n.messages.msg.translation.content.greeting.firstname}} {{$i18n.messages.msg.translation.content.greeting.lastname}}
        </span>
      </h1>
      <h2>
        {{  $i18n.messages.msg.translation.content.greeting.job }}
      </h2>
      <h5 class="colored">
        {{  $i18n.messages.msg.translation.content.greeting.country_info  }} {{$i18n.messages.msg.translation.content.greeting.country}}
      </h5>
    </div>

    <div class="container_button">
      <div>
        <b-button class="gradient-button">
          {{  $i18n.messages.msg.translation.content.button.hire }}
        </b-button>
      </div>
      <div>
        <b-button class="custom-reverse-button">
          {{  $i18n.messages.msg.translation.content.button.cv }}
        </b-button>
      </div>
    </div>

    <div class="container_top_right">
      <div class="full_height">
        <img class="portrait" alt="{{ $i18n.messages.msg.translation.content.greeting.firstname }}" src="../assets/portrait_normale.jpg">
      </div>
    </div>

  </div>

</template>

<style scoped>

  h1{
    font-size: 4vw;
  }
  h2{
    font-size: 3vw;
  }
  h5{
    font-size: 2vw;
  }

  .container{
    display: grid;
    height: 50rem;
    margin-top: 2rem;
    place-items: center;
  }
  .container_top_left {
    text-align: left;
    grid-column: 1;
    grid-row: 1;
  }
  .container_top_left >* {
    margin-bottom: 2vh;
  }

  .container_button {
    grid-column: 1;
    grid-row: 2;
    display: flex;
  }

  .container_top_right {
    grid-column: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    display: grid;
  }
  .full_height{
    display: flex;
    padding: 3vh;
  }
  .portrait {
    border: #017d8f 5px solid;
    color: navajowhite !important;
  }
  img{
    background: navajowhite !important;
    min-width: 1px;
    max-width: 50vh;
  }

  .custom-reverse-button {
    position: relative;
    font-size: 3vh;
    font-weight: bold;
    color: transparent;
    background: var(--nav-active-background);
    -webkit-background-clip: text;
    background-clip: text;
    border: 1px solid transparent;
    transition: opacity 0.3s ease;
    overflow: hidden;
  }

  .custom-reverse-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--nav-active-background);
    z-index: -1;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .custom-reverse-button:hover::before {
    opacity: 80%;
  }

  .gradient-button {
    font-size: 3vh;
    background: var(--nav-active-background);
    font-weight: bold;
    color: white;
    opacity: 80%;
  }

  .gradient-button:hover {
    color: transparent;
    background: var(--nav-active-background);
    -webkit-background-clip: text;
    background-clip: text;
    border: 1px solid transparent;
    transition: opacity 0.3s ease;
    opacity: 1;
  }


</style>

