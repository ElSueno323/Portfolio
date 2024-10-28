<script setup lang="ts">

</script>

<template>
  <div>
    <div></div>
    <b-nav tabs>
      <span></span>
      <b-nav-item v-for="content in $i18n.messages.msg.translation.content.navigation" :key="content">
        {{content}}
      </b-nav-item>
    </b-nav>
    <div id="header-line" class="custom-background"></div>
  </div>
  <div></div>
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