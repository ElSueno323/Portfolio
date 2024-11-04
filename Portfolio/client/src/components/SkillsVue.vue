<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>
      <span class="colored">
        {{$i18n.messages.msg.translation.content.skills.title}}
      </span>
    </h1>
    <div class="container_languages">
      <h2>
        {{$i18n.messages.msg.translation.content.skills.title_languages}}
      </h2>
      <h6>
        <ul>
          <div
            v-for="content in $i18n.messages.msg.translation.content.skills.spoken_languages"
            :key="content">
            {{content.name}} - {{content.level}} <flag :iso="content.icon" />
          </div>
        </ul>
      </h6>
    </div>

    <div class="container_tools">
      <h2>
        {{$i18n.messages.msg.translation.content.skills.title_tools}}
      </h2>
      <h6>
        <ul>
          <div>
            {{$i18n.messages.msg.translation.content.skills.cat_professional}}
            <li
              v-for="content in $i18n.messages.msg.translation.content.skills.icon_professional"
            :key="content">
              <a href=""
                 :content="content.about"
                 v-tippy="{
                   arrow : true,
                    arrowType : 'round',
                    animation : 'fade',
                    theme:'dark',
                    interactive:true}">
                <img
                  :src="content.url"
                  :alt="content.name"
                  >
              </a>

            </li>
          </div>
          <div>
            {{$i18n.messages.msg.translation.content.skills.cat_school}}
          </div>
          <div>
            {{$i18n.messages.msg.translation.content.skills.cat_personal}}
          </div>
        </ul>
      </h6>
    </div>

  </div>
</template>

<style scoped>
  img{
    width: 50px;
  }
</style>