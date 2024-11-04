<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="container_top_left">
      <h1>
        <span class="colored">
          {{$i18n.messages.msg.translation.content.about.firstname}} {{$i18n.messages.msg.translation.content.about.lastname}}
        </span>
      </h1>
      <div class="container_about">
        <h2>
          {{  $i18n.messages.msg.translation.content.about.title_about }}
        </h2>
        <h6>
          {{  $i18n.messages.msg.translation.content.about.content_about }}
        </h6>
      </div>

    </div>
    <div class="container_top_right">
      <img class="portrait" alt="{{ $i18n.messages.msg.translation.content.greeting.firstname }}" src="../assets/portrait.jpg">
    </div>

    <div class="container_bottom">
      <div class="container_education">
        <h2>
          {{  $i18n.messages.msg.translation.content.about.title_education }}
        </h2>
        <div class="container_education_content">
          <img src="../assets/HE2B.webp" alt="">
          <h6>
            {{  $i18n.messages.msg.translation.content.about.content_education }}
          </h6>
        </div>
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
    </div>


  </div>
</template>

<style scoped>
.container{
  text-align: left;
  display: grid;
  margin: 5vh;

}
.container_top_left {
  text-align: left;
  grid-column: 1;
  grid-row: 1;

}
.container_about{
  display: grid;
  padding: 5vh;
}

.container_education{
  display: grid;
  padding: 5vh;
}
.container_education_content{
  display: flex;
}
.container_education_content img{
  width: 17vh;
  margin: auto;
}

.container_bottom{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 2;
  display: flex;
}
.container_button {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-items: center;
}

.container_top_right {
  grid-column: 2;
  grid-row: 1;
  display: grid;
  align-items: center;
}
.full_height{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.portrait {
  border: #017d8f 5px solid;
  color: navajowhite !important;
}
img{
  min-height: auto;
  min-width: auto;
  max-height: 15em;
  max-width: 25em;
  background: navajowhite !important;
}
</style>