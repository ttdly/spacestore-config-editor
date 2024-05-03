<script setup>
import { ref } from 'vue'
import EntitySelectView from './EntitySelectView.vue';
import ShopWindow from '@/components/ShopWindow.vue';
import { useSelectedEntitiesStore } from '@/stores/selectedEntities';

const entitySelectWindowShow = ref(false)
const selectedEntities = useSelectedEntitiesStore();

const downLoadJson = function () {
  const list = selectedEntities.tuningList()
  const jsonString = JSON.stringify(list);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `store_${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

</script>

<template>
  <div class="action">
    <div class="primary-button" @click="() => document.querySelectorAll('.entity-container').forEach(x => x.click())">初始化全部数据 (Initialize all data)</div>
    <div class="primary-button" @click="() => { entitySelectWindowShow = true }">选择物品 (Select Items)</div>
    <div class="primary-button" @click="downLoadJson">下载数据 (Download Configure File)</div>
    
  </div>
  <ShopWindow />
  <div class="entity-select-window" v-show="entitySelectWindowShow" @click="() => { entitySelectWindowShow = false }">
    <div class="close-select-window" @click="() => { entitySelectWindowShow = false }">X</div>
    <EntitySelectView />
  </div>
</template>

<style scoped>
.action {
  gap: 8px;
  display: flex;
  margin-bottom: 10px;
}

.close-select-window {
  position: fixed;
  top: 10px;
  right: 20px;
  border-radius: 3px;
  background-color: var(--color-pink);
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: white;
  z-index: 999;
  cursor: pointer;
}

.close-select-window:hover {
  background-color: var(--color-pink-light);
}

.entity-select-window {
  background-color: rgba(0, 0, 0, 0.637);
  padding: 48px;
  position: fixed;
  top: 0;
  right: 0;
  overflow: scroll;
  height: 100%;
}
</style>
