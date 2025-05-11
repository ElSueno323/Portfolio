<template>
  <div class="container" ref="skillsContainer" :class="{ visible: isVisible }">
    <h1>
      <span class="colored">
        {{ $i18n.messages.msg.translation.content.skills.title }}
      </span>
    </h1>
    <div class="container_languages">
      <h2>
        {{ $i18n.messages.msg.translation.content.skills.title_languages }}
      </h2>
      <div class="languages-grid">
        <div
          v-for="content in $i18n.messages.msg.translation.content.skills.spoken_languages"
          :key="content"
          class="spoken_languages">
          <span>{{ content.name }}</span> <span> - </span> <span>{{ content.level }}</span>
          <div class="flag-animation">
            <flag :iso="content.icon" />
          </div>
        </div>
      </div>
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
                class="icon-wrapper">
                <a :href="content.url" :title="content.about">
                  <img :src="content.image" :alt="content.name">
                </a>
              </div>
            </div>
          </div>

          <div class="container_icon">
            <div>{{ $i18n.messages.msg.translation.content.skills.cat_school }}</div>
            <div class="icons">
              <div
                v-for="content in $i18n.messages.msg.translation.content.skills.icon_school"
                :key="content"
                class="icon-wrapper">
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
                class="icon-wrapper">
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

<script>
export default {
  name: 'SkillsVue',
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible = entry.isIntersecting
      })
    }, {
      threshold: 0.1
    })

    if (this.$refs.skillsContainer) {
      observer.observe(this.$refs.skillsContainer)
    }
  }
}
</script>

<style scoped>
.container {
  text-align: left;
  display: grid;
  margin-right: 3vh;
  align-self: center;
  opacity: 0;
  transform: translateX(-100px);
  transition: transform 0.8s ease-out, opacity 0.8s ease-out;
  will-change: transform, opacity;
}

.container.visible {
  opacity: 1;
  transform: translateX(0);
}

.container_languages {
  margin-top: 2vh;
  margin-bottom: 3vh;
  color: #333;
  border-radius: 5px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  padding: 10px;
}

.spoken_languages {
  display: flex;
  gap: 2vh;
  align-items: center;
  padding: 15px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 0;
  transition: transform 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.spoken_languages:hover {
  transform: translateX(10px);
  background: rgba(0, 0, 0, 0.1);
}

.spoken_languages span {
  font-size: 1.1em;
  font-weight: 500;
  color: #333;
  text-shadow: none;
  letter-spacing: 0.5px;
}

.spoken_languages span:nth-child(2) {
  color: var(--nav-active-background);
  font-weight: 600;
  margin: 0 5px;
}

.flag-animation {
  display: inline-block;
  margin-left: 10px;
  animation: swing 2s ease-in-out infinite;
}

.flag-animation :deep(img) {
  width: 30px;
  height: 20px;
  display: block;
}

@keyframes swing {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
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
  color: white;
}

h6 {
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
  position: relative;
  z-index: 100;
}

.container_languages h2,
.container_tools h2 {
  background: var(--nav-active-background);
  color: white;
  padding: 12px 25px;
  border-radius: 15px;
  text-align: center;
  margin: 20px 0;
  border: 2px solid var(--nav-active-background);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.container_languages h2:hover,
.container_tools h2:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}
</style>