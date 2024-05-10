import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GoodsConfigView from '../views/GoodsConfigView.vue'
import GoodsSettingView from "@/views/GoodsSettingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GoodsConfigView
    },
    {
      path: '/setting',
      name: 'setting',
      component: GoodsSettingView
    }
  ]
})

export default router
