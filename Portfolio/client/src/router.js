import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from '@/components/HomeVue.vue';
import AboutVue from '@/components/AboutVue.vue';
import SkillsVue from '@/components/SkillsVue.vue';

const routes = [
  { path: '/', component: HomeVue, name: 'Home' },
  { path: '/about', component: AboutVue, name: 'About' },
  { path: '/skills', component: SkillsVue, name: 'Skills' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
