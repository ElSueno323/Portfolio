<script setup lang="ts">

</script>

<template>
  <div>
    <b-nav tabs>
      <span></span>
      <b-nav-item>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Link with a long name </b-nav-item>
    </b-nav>
    <div id="header-line" class="custom-background"></div>
  </div>
</template>

<style scoped>
#header-line {
  margin-top: -1px;
  padding-top: 2rem;
  height: 1px;
}

span{
  padding-left: 5rem
}

.nav-item{
  font-weight: bold;
}
</style>