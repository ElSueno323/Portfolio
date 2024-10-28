<template>
  <NavigationVue/>
  <HomeVue/>
</template>

<script>
// import Portfolio from './components/Portfolio.vue'
import NavigationVue from '@/components/NavigationVue.vue';
import HomeVue from '@/components/HomeVue.vue';

export default {
  name: 'App',
  components: {
    // Portfolio,
    NavigationVue,
    HomeVue
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}

:root {
  --nav-active-background: linear-gradient(45deg, #34ab3d, #1a00f5);
}
.custom-background {
  background: var(--nav-active-background);
  color: transparent;
  border: None;
}

.gradient-button {
  background: linear-gradient(45deg, #34ab3d, #1a00f5); /* Dégradé de couleur */
  -webkit-background-clip: text; /* Pour Chrome/Safari */
  background-clip: text; /* Pour les autres navigateurs */
  border: 2px solid transparent;
  color: transparent;
}

.nav-item .nav-link.active{
  background: var(--nav-active-background);
  color: white !important;
}


.nav-item:not(.active) .nav-link:hover{
  background: var(--nav-active-background);
  transition: background-color 1s,color 1s ;
  border-bottom: none;
  color: white !important;
}



</style>
