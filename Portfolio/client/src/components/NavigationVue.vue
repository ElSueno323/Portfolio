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

      <div class=" d-flex align-items-center">
        <button class="btn btn-success mx-0" id="languages"
                v-for="lang in availableLocales"
                :key="lang"
                :class="{ active: lang === currentLocale }"
                @click="changeLanguage(lang)">
          {{ lang.toUpperCase() }}
        </button>
      </div>
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
  margin-top: -1px;
  padding-top: 3vh;
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
  #languages{
    font-size: 0.5rem;
    padding: 0.2rem;
  }
}

@media (min-width: 576px) {
  #nav_body {
    font-size: 0.9rem;
  }

  #languages{
    font-size: 0.7rem;
  }
}

@media (min-width: 768px) {
  #nav_body {
    font-size: 1.5rem;
  }

  #languages{
    font-size: 0.8rem;
    padding: 0.2rem;
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