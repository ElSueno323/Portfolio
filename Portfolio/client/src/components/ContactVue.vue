<template>
  <div class="container-fluid " id="contact"
  style="padding: 0 ">
    <div style="
    background: var(--nav-active-background);
">
      <h1 style="color: white ; font-weight: bold">
        {{ contact.title }}
      </h1>
      <h6 style="color: white">
        {{ contact.content }}
      </h6>
      <div class="container_contact">
        <b-button
          v-for="network in contact.network"
          :key="network"
          :href="network.link"
          style="margin: 1vh;"
          variant="outline-light"
        >
          <img :src="network.logo" alt="" style="min-width: 1vh; max-width: 2vh;"/>
          <span>{{ network.name }}</span>

        </b-button>
      </div>

    </div>
  </div>

</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { messages } = useI18n();
const contact = messages.value.msg.translation.content.contact;
</script>
<style>


.container_contact{
  display: flex;
  gap: 2vh;
  justify-content: center;
}

.contact_button{
  min-width: 1vh;
  max-width: 2vh;
}

</style>