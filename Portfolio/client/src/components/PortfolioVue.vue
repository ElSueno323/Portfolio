<template>
  <div class="container">
    <h1>
      <span class="colored">
        {{ portfolio.title }}
      </span>
    </h1>
    <div class="container_portfolio">
      <b-nav tabs>
        <b-nav-item
          v-for="(project) in projects"
          :key="project"
          @click.prevent="selectProject(project)"
        >
          {{project.name}}
        </b-nav-item>
      </b-nav>
      <div class="container_portfolio_contain">
        <h2>
          {{actualproject.name}}
        </h2>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="flex-grow-1">
            {{actualproject.description}}
          </h6>
          <img :src="require(`@/assets/${actualproject.picture}`)" alt="Project image" class="img-fluid"
               style="max-width: 50%; height: auto; margin-left: 20px;"/>
        </div>
        <h5>
          {{projects.subtitle_tech}}
        </h5>
        <div class="technology-container ">
          <div
            v-for="tech in actualproject.tech"
            :key="tech"
          >
            <b-badge variant="primary">{{tech.name}}</b-badge>
          </div>
        </div>
        <div class="text-center">
          <b-button class="gradient-button" :href="actualproject.url" variant="success">
            {{  $i18n.messages.msg.translation.content.button.portfolio }}
          </b-button>
        </div>


      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { messages } = useI18n();
const portfolio=messages.value.msg.translation.content.portfolio;
const projects = portfolio.projects;
const actualproject = ref(projects[Object.keys(projects)[0]]);

function selectProject(project) {
  actualproject.value = project;
}
</script>


<style scoped>
.container{
  text-align: left;
  display: grid;
  margin: 3vh;
  align-self: center;
  background: white;
}

.container_portfolio_contain{
  margin: 2vh;
  display: grid;
  grid-gap: 1vh;
}
.technology-container {
  display: flex;
  flex-wrap: wrap; /* Permet de passer à la ligne */
  gap: 20px; /* Espace fixe entre chaque élément */
}

.gradient-button{
    padding: 2vh 3vh 2vh 3vh;
    justify-self: center;
}

img{
  max-width: 620px;
}
</style>