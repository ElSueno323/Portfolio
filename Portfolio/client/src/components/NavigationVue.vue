<script setup lang="ts">

</script>

<template>
  <div id="nav_body">
    <div></div>
    <b-nav tabs>
      <span></span>
      <b-nav-item
                  v-for="content in $i18n.messages.msg.translation.content.navigation"
                  :key="content"
                  @click="$emit('navigate',content)">
        {{content}}
      </b-nav-item>
    </b-nav>
    <div id="header-line" class="custom-background"></div>
  </div>
</template>

<style scoped>

#nav_body{
  height: 100%;
  position: sticky !important;
  top: 0;
  background-color: white;
}

#header-line {
  margin-top: -1px;
  padding-top: 3vh;
}

span{
  padding-left: 5rem;
}

.nav-item{
  font-weight: bold;
}

</style>