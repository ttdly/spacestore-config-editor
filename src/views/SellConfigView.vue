<script setup>
import {sellItemsId} from '@/assets/sellItemsId';
import {useCanSellItems} from "@/stores/canSellItems.js";

const canSellItems = useCanSellItems();

const add = (id) => {
    canSellItems.list.push(id);
    canSellItems.price.push(0.1);
}

const remove = (id) => {
    const index = canSellItems.list.indexOf(id);
    canSellItems.list.splice(index, 1);
    canSellItems.price.splice(index, 1);
}

const downLoadJson = () => {
    const list = canSellItems.TuningList();
    const jsonString = JSON.stringify(list);
    const blob = new Blob([jsonString], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sell_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
</script>

<template>
  <div class="actions">
    <span>{{$t("nav.price")}}</span>
    <div class="primary-button-pink small" @click="downLoadJson">{{$t("action.downloadConfigureFile")}}</div>
  </div>
  <div class="container">
    <div v-for="id in sellItemsId" class="item">
      <div>
        <img :src="`icon/${id}.png`" alt="" class="ui">
      </div>
      <span class="name">{{$t(`entities.${id}`)}}</span>
      <div v-if="canSellItems.IsMarkSell(id)" class="full input-box">
        <input v-model="canSellItems.price[canSellItems.list.indexOf(id)]" type="text">
        <div class="primary-button-pink delete" @click="remove(id)">
          <img alt="delete" src="/material-symbols--delete-outline.svg"/>
        </div>
      </div>
      <div v-else class="primary-button-pink full" @click="add(id)">+</div>
    </div>
  </div>
</template>

<style scoped>

.actions {
  margin: 5px 0;
  text-align: right;
}

.input-box {
  width: 6em !important;
  margin: 0 !important;
  margin-bottom: -16px !important;
}

.input-box input {
  width: 100%;
}

.input-box {
  display: flex;
  align-items: center;
  gap: 4px;
}

.delete {
  display: flex;
  align-items: center;
  padding: 2px;
}

.full {
  padding: 0;
  width: calc(100% + 8px);
  text-align: center;
  margin-bottom: -16px;
  margin-left: -4px;
  margin-right: -4px;
  font-weight: bold;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-height: calc(100% - 100px);
  overflow-y: scroll;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-blue);
  color: #fff;
  padding: 16px 4px;
  flex-grow: 1;
}

.ui {
  height: 1.2rem;
}

.name {
  white-space: nowrap;
  display: inline-block;
  width: 6em;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 5px;
}
</style>