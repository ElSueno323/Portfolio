<template>
  <div class="main">
    <NavigationVue @navigate="navigateTo"/>
    <HomeVue id="home" />
    <AboutVue  id="about"/>
    <SkillsVue id="skills"/>
    <PortfolioVue id="portfolio"/>
    <ContactVue id="contact"/>
  </div>
</template>

<script>
import HomeVue from '@/components/HomeVue.vue';
import NavigationVue from '@/components/NavigationVue.vue';
import AboutVue from '@/components/AboutVue.vue';
import SkillsVue from '@/components/SkillsVue.vue';
import PortfolioVue from '@/components/PortfolioVue.vue';
import ContactVue from '@/components/ContactVue.vue';
import loadLocaleMessages from '@/i18n';


export default {
  name: 'App',
  components: {
    ContactVue,
    PortfolioVue,
    SkillsVue,
    AboutVue,
    NavigationVue,
    HomeVue,
  },
  setup() {
    const loadD= async ()=>{
      await loadLocaleMessages();
    }
    return{
      loadD,
    };
  },
  methods: {
    navigateTo (route) {
      document.getElementById(route.toLowerCase()).scrollIntoView({behavior:"smooth"})
    }
  }
}

</script>

<style >



</style>
