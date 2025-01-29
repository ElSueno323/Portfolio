
<template>

  <div class="container">
    <div class="container_top_left">
      <h2>
        {{ $i18n.messages.msg.translation.content.greeting.title }}
      </h2>
      <h1 class="greeting">
        <span>{{ $i18n.messages.msg.translation.content.greeting.name }}</span>
        <span v-for="(letter, index) in `${$i18n.messages.msg.translation.content.greeting.firstname}\u00A0${$i18n.messages.msg.translation.content.greeting.lastname}`"
              :key="index"
              :style="{ animationDelay: `${index * 0.1}s` }"
              class="colored">
            {{letter}}
        </span>
      </h1>
      <h2>
        {{  $i18n.messages.msg.translation.content.greeting.job }}
      </h2>
      <h5 v-for="(letter, index) in `${$i18n.messages.msg.translation.content.greeting.country_info}\u00A0${$i18n.messages.msg.translation.content.greeting.country}`"
          :key="index"
          :style="{ animationDelay: `${index * 0.1}s` }"
        class="colored">
        {{letter}}
      </h5>
    </div>

    <div class="container_button">
      <div>
        <b-button class="gradient-button" :href="$i18n.messages.msg.translation.content.contact.network.email.link">
          {{  $i18n.messages.msg.translation.content.button.hire }}
        </b-button>
      </div>
      <div>
        <b-button class="gradient-button"
                  :href=$i18n.messages.msg.translation.content.extra.cv.path
                  :download=$i18n.messages.msg.translation.content.extra.cv.name >
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

<script setup >

</script>

<style scoped>

  h1{
    font-size: 3vw;
  }
  h2{
    font-size: 2vw;
  }
  h5{
    font-size: 2vw;
  }

  .container{
    display: grid;
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
  .greeting span{
    display: inline;
  }

  @media screen and (max-width: 1200px) {
    .greeting  {
      display: block;
    }
  }

  .container_button {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 2;
    gap: 3rem;
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
    border-radius: 10px;
    color: navajowhite !important;
  }
  img{
    background: navajowhite !important;
    min-width: 1px;
    max-width: 50vh;
  }

  .colored{
    opacity: 0;
    display: inline-block;
    animation: fadeIn 4s alternate-reverse running infinite;
  }
  @keyframes fadeIn {
    from{
      opacity: 0;
      transform: translateY(10px);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    h1{
      font-size: 1.3rem;
    }
    h2{
      font-size: 0.8rem;
    }
    h5{
      font-size: 0.8rem;
    }
  }

  @media (min-width: 300px) {
    img {
      width: 7rem;
    }
  }

  @media (min-width: 400px) {
    img {
      width: 10rem;
    }

  }
  @media (min-width: 530px) {
    img {
      width: 14rem;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 20rem;
    }

  }

  @media (min-width: 992px) {
    img {
      width: 30rem;
    }
  }

  @media (min-width: 1200px) {
    img {
      width: 100rem;
    }
  }


</style>

