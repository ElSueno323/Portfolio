<template>
  <div class="container-fluid "
  style="padding: 0 ">
    <div class="contact-background">
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
          class="contact-btn"
          variant="outline-light"
        >
          <img :src="network.logo" alt="" class="contact-logo"/>
          <span class="contact-text">{{ network.name }}</span>
        </b-button>
      </div>
      <div>
        {{ copyright }}
      </div>

    </div>
  </div>

</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { messages } = useI18n();
const contact = messages.value.msg.translation.content.contact;
const copyright = messages.value.msg.translation.content.extra.copyright;
</script>
<style>

.container_contact{
  display: flex;
  gap: 2vh;
  justify-content: center;
}

.contact-background {
  background: var(--nav-active-background);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 2vh;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 0.7em;
  padding: 0.7em 1.2em;
  font-size: 1em;
}

.contact-logo {
  min-width: 1.7em;
  max-width: 2.2em;
  height: auto;
  margin-right: 0.5em;
}

.contact-text {
  display: inline-block;
  vertical-align: middle;
}

</style>