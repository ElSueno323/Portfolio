<template>
  <div class="main">
    <NavigationVue @navigate="navigateTo"/>
    <router-view/>
  </div>
</template>

<script>
import NavigationVue from '@/components/NavigationVue.vue';
export default {
  name: 'App',
  components: {
    NavigationVue,
  },
  methods: {
    navigateTo (route) {
      route=route.toLowerCase();
      if(route === "home"){
        route="/";
      }
      this.$router.push({ path: route.toLowerCase() });
    }
  }
}

</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  width: 100%;
  margin-top: 2rem;
}
</style>
