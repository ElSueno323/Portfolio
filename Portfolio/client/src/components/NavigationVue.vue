<script >

import { i18n, loadLocaleMessages } from "@/i18n";

export default {
  computed: {
    currentLocale() {
      return i18n.global.locale;
    },
    availableLocales() {
      return ["en", "fr"];
    },
  },
  methods: {
    async changeLanguage(lang) {
      if (lang !== this.currentLocale) {
        await loadLocaleMessages(lang);
      }
    },
  },
};
</script>

<template>
  <div id="nav_body">
    <b-nav tabs class="d-flex justify-content-center small">
      <b-nav-item
        class="small"
                  v-for="content in $i18n.messages.msg.translation.content.navigation"
                  :key="content"
                  @click.prevent="$emit('navigate',content.name)">
        <span class="responsive-title">{{ content.title }}</span>
      </b-nav-item>
      <b-dropdown toggle-class="custom-background text-white"
                  variant="link"
                  class="m-1"
                  size="sm"
                  :text="currentLocale.toUpperCase()"
      >
        <b-dropdown-item
          v-for="lang in availableLocales"
          :key="lang"
          @click="changeLanguage(lang)"
          :class="{'custom-background': lang === currentLocale }"
        >
          <div :class="{'text-white': lang === currentLocale } "> {{ lang.toUpperCase() }}</div>
        </b-dropdown-item>
      </b-dropdown>

    </b-nav>

    <div id="header-line" class="custom-background"></div>

  </div>
</template>

<style scoped>

#nav_body{
  height: 100%;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 9999;
}

#header-line {
  width: 100%;
  background: linear-gradient(70deg, #34ab3d, #0072f5, #34ab3d, #0072f5, #34ab3d);
  background-size: 200% 100%;
  animation: gradient-flow 2.5s linear infinite;
  padding-top: 3vh;
}

@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.nav-item{
  font-weight: bold;
}


#nav_body {
  font-size: 1rem;
}



@media (min-width: 300px) {
  #nav_body {
    font-size: 0.6rem;
  }

}

@media (min-width: 576px) {
  #nav_body {
    font-size: 0.9rem;
  }

}

@media (min-width: 768px) {
  #nav_body {
    font-size: 1.5rem;
  }

}

@media (min-width: 992px) {
  #nav_body {
    font-size: 1.6rem;
  }
}

@media (min-width: 1200px) {
  #nav_body {
    font-size: 1.7rem;
  }
}

</style>