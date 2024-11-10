<script setup lang="ts">

</script>

<template>
  <div id="nav_body">
    <b-nav tabs class="d-flex justify-content-center">
<!--      <span class="ms-sm-5"></span>-->
      <b-nav-item
                  v-for="content in $i18n.messages.msg.translation.content.navigation"
                  :key="content"
                  @click.prevent="$emit('navigate',content.name)">
        <span class="responsive-title">{{ content.title }}</span>
      </b-nav-item>
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
}

@media (min-width: 576px) {
  #nav_body {
    font-size: 0.9rem;
  }
}

@media (min-width: 768px) {
  #nav_body {
    font-size: 1.1rem;
  }

}

@media (min-width: 992px) {
  #nav_body {
    font-size: 1.2rem;
  }
}

@media (min-width: 1200px) {
  #nav_body {
    font-size: 1.3rem;
  }
}

</style>