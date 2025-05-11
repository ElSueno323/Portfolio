<template>
  <div>
    <LoadingScreen />
    <div v-show="!isLoading" class="main">
      <NavigationVue @navigate="navigateTo"/>
      <HomeVue id="home" />
      <AboutVue  id="about"/>
      <SkillsVue id="skills"/>
      <PortfolioVue id="portfolio"/>
      <ContactVue id="contact"/>
    </div>
  </div>
</template>

<script>
import HomeVue from '@/components/HomeVue.vue';
import NavigationVue from '@/components/NavigationVue.vue';
import AboutVue from '@/components/AboutVue.vue';
import SkillsVue from '@/components/SkillsVue.vue';
import PortfolioVue from '@/components/PortfolioVue.vue';
import ContactVue from '@/components/ContactVue.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import { loadLocaleMessages } from '@/i18n';

export default {
  name: 'App',
  components: {
    ContactVue,
    PortfolioVue,
    SkillsVue,
    AboutVue,
    NavigationVue,
    HomeVue,
    LoadingScreen
  },
  data() {
    return {
      isLoading: true
    }
  },
  async mounted() {
    await this.loadD();
    window.addEventListener('load', () => {
      this.isLoading = false;
    });
  },
  setup() {
    const loadD = async () => {
      await loadLocaleMessages('en');
    }
    return {
      loadD,
    };
  },
  methods: {
    navigateTo(route) {
      document.getElementById(route.toLowerCase()).scrollIntoView({behavior:"smooth"})
    }
  }
}
</script>

<style>
.main {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}
</style>
