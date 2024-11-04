<script setup lang="ts">

</script>

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
            :key="content">
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
                  <img :src="content.url" :alt="content.name">
                </a>
              </div>
            </div>
          </div>
        </ul>
      </h6>
    </div>

  </div>
</template>

<style scoped>
.container {
  text-align: left;
  display: grid;
  margin: 3vh;
  align-self: center;
}

.container_languages {
  margin-top: 2vh;
  margin-bottom: 3vh;

}
.container_icon {
  display: grid;
}

.icons {
  margin: 1vh;
  display: flex;
  flex-wrap: wrap;
}

img {
  width: 40px;
  margin: 1vh;
}

</style>