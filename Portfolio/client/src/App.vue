<template>
  <div class="main">
    <NavigationVue @navigate="navigateTo"/>
    <HomeVue></HomeVue>
    <AboutVue></AboutVue>
    <SkillsVue></SkillsVue>
    <PortfolioVue></PortfolioVue>
    <ContactVue></ContactVue>
  </div>
</template>

<script>
import HomeVue from '@/components/HomeVue.vue';
import NavigationVue from '@/components/NavigationVue.vue';
import AboutVue from '@/components/AboutVue.vue';
import SkillsVue from '@/components/SkillsVue.vue';
import PortfolioVue from '@/components/PortfolioVue.vue';
import ContactVue from '@/components/ContactVue.vue';
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
  methods: {
    navigateTo (route) {
      document.getElementById(route.toLowerCase()).scrollIntoView({behavior:"smooth"})
    }
  },

}

</script>

<style >


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  position: relative;
  color-scheme: dark;
}

#app::after{
  content: "";
  background-image: url("assets/back.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4;
  z-index: -1;
}

:root {
  --nav-active-background: linear-gradient(70deg, #34ab3d, #0072f5);
  --nav-default-background: linear-gradient(25deg, #34ab3d, #0072f5);
}
.custom-background {
  background: var(--nav-active-background);
  color: transparent;
  border: None;
}

.colored{
  font-weight: bold;
  color: transparent;
  background: var(--nav-active-background);
  -webkit-background-clip: text;
  background-clip: text;
}

.nav-item .nav-link.active{
  background: var(--nav-active-background);
  color: white !important;
}


.nav-item:not(.active) .nav-link:hover{
  background: var(--nav-default-background);
  transition: background-color 1s,color 1s ;
  border-bottom: none;
  color: white !important;
}

.nav-item .nav-link{
  color: black;
}

.nav-item:focus-within {
  border: none;
}

.nav-link:focus-within{
  color: white !important;
  background: var(--nav-default-background);
  border-bottom: none !important;
}

.container{
  display: grid;
  height: 100%;
  margin-top: 2rem;
  padding: 1em;
  background: white;
  border-radius: 2vh;
  border: #017d8f 5px solid;
}
</style>
