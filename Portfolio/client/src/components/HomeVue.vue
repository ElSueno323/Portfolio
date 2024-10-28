<script setup lang="ts">

</script>

<template>

  <div class="container">
    <div class="container_top_left">
      {{  $i18n.messages.msg.translation.content.greeting }}
      <h1>{{  $i18n.messages.msg.translation.content.greeting.title }}</h1>
      <h1>{{  $i18n.messages.msg.translation.content.greeting.name }}</h1>
      <h2>{{  $i18n.messages.msg.translation.content.greeting.job }}</h2>
      <h5>{{  $i18n.messages.msg.translation.content.greeting.country_info }}</h5>
    </div>

    <div class="container_left_bottom">
      <b-button class="gradient-button">
        {{  $i18n.messages.msg.translation.content.button.hire }}
      </b-button>
      <b-button class="custom-reverse-button">
        {{  $i18n.messages.msg.translation.content.button.cv }}
      </b-button>
    </div>

    <div class="container_right">
      <BBadge>qsd</BBadge>
    </div>

  </div>

</template>

<style scoped>
  .container{
    display: grid;
  }
  .container_top_left {
    text-align: left;
    grid-column: 1;
    grid-row: 1;
    background-color: #46502c;
  }
  .container_left_bottom {
    grid-column: 1;
    grid-row: 2;
  }
  .container_right {
    grid-column: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: blanchedalmond;
  }

  .custom-reverse-button {
    position: relative;
    font-size: 24px;
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
    font-size: 24px;
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

