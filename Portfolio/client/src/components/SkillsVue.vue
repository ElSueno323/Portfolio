
<template>
  <div class="container">
    <h1>
      <span class="colored">
        {{ $i18n.messages.msg.translation.content.skills.title }}
      </span>
    </h1>
    <div class="container_languages">
      <h2>
        {{ $i18n.messages.msg.translation.content.skills.title_languages }}
      </h2>
      <h6>
        <ul>
          <div
            v-for="content in $i18n.messages.msg.translation.content.skills.spoken_languages"
            :key="content"
          class="spoken_languages">
              <span>{{ content.name }}</span> <span> - </span> <span>{{ content.level }}</span>
            <flag :iso="content.icon" />
          </div>
        </ul>
      </h6>
    </div>

    <div class="container_tools">
      <h2>
        {{ $i18n.messages.msg.translation.content.skills.title_tools }}
      </h2>
      <h6>
        <ul>
          <div class="container_icon">
            <div>
              {{ $i18n.messages.msg.translation.content.skills.cat_professional }}
            </div>
            <div class="icons">
              <div
                v-for="content in $i18n.messages.msg.translation.content.skills.icon_professional"
                :key="content"
              >
                <a :href="content.url" :title="content.about">
                  <img :src="content.image" :alt="content.name">
                </a>
              </div>
            </div>
          </div>

          <div class="container_icon">
            <div>{{ $i18n.messages.msg.translation.content.skills.cat_school }}
            </div>
            <div class="icons">
              <div
                v-for="content in $i18n.messages.msg.translation.content.skills.icon_school"
                :key="content"
              >
                <a :href="content.url" :title="content.about">
                  <img :src="content.image" :alt="content.name">
                </a>
              </div>
            </div>
          </div>

          <div class="container_icon">
            <div>
              {{ $i18n.messages.msg.translation.content.skills.cat_personal }}
            </div>

            <div class="icons">
              <div
                v-for="content in $i18n.messages.msg.translation.content.skills.icon_personal"
                :key="content"
              >
                <a :href="content.url" :title="content.about">
                  <img :src="content.image" :alt="content.name">
                </a>
              </div>
            </div>
          </div>
        </ul>
      </h6>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
  text-align: left;
  display: grid;
  margin-right: 3vh;
  align-self: center;

}

.container_languages {
  margin-top: 2vh;
  margin-bottom: 3vh;
  background: var(--nav-active-background);
  color: white;
  border-radius: 5px;
}

.spoken_languages{
  display: flex;
  gap:2vh;
}

.container_icon {
  display: grid;
}

.icons {
  margin: 1vh;
  display: flex;
  flex-wrap: wrap;
}



.container_tools {
  background: var(--nav-active-background);
  color: white;
}

h6{
  background: white;
  color: black;
  padding: 1vh;
  font-weight: bold;
}

img {
  width: 40px;
  height: auto;
  margin: 1vh;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  object-fit: cover;
}

@media (max-width: 500px) {
  img {
    width: 30px;
  }
}

img:hover {
  -ms-transform: scale(2);
  -moz-transform: scale(2);
  -webkit-transform: scale(2);
  -o-transform: scale(2);
  transform: scale(2.2);
  position:relative;
  z-index:100;
}

</style>