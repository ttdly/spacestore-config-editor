import { createRouter, createWebHistory } from 'vue-router'
import GoodsConfigView from '../views/GoodsSelectView.vue'
import GoodsSettingView from "@/views/GoodsSettingView.vue";
import SellConfigView from "@/views/SellConfigView.vue";

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
    },
    {
      path: '/sell',
      name: 'sell',
      component: SellConfigView
    }
  ]
})

export default router
