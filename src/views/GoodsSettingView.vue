<script setup>
import {useSelectedStore} from "@/stores/selected.js";
import draggableComponent from 'vuedraggable'
import {useRouter} from "vue-router";

const selected = useSelectedStore();
const router = useRouter();

const downLoadJson = () => {
    const list = selected.list;
    const jsonString = JSON.stringify(list);
    const blob = new Blob([jsonString], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `store_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

const prev = () => {
    router.back();
}

</script>

<template>
  <div class="actions">
    <span>{{$t("nav.drag")}}</span>
    <div class="primary-button-pink small" @click="prev">{{$t("action.prev")}}</div>
    <div class="primary-button-pink small" @click="downLoadJson">{{$t("action.downloadConfigureFile")}}</div>
  </div>
  <draggableComponent v-model="selected.list" item-key="index" class="entities-container" handle=".handle">
    <template #item="{element}">
      <div class="entity-container">
        <i class="handle">
          <img src="/mingcute--move-line.svg" alt=""/>
        </i>
        <span>
          <img
              :src="`icon/${element.id}.png`"
              alt=""
              class="ui">
        </span>
        <span class="entity-name">
          {{$t(`entities.${element.id}`)}}
        </span>
        <span><input type="number" v-model="element.quantity"></span>
        <span><input type="number" v-model="element.price"></span>
      </div>
    </template>
  </draggableComponent>
</template>

<style scoped>
.actions {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
  gap: 5px;
}

.entities-container {
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  max-height: calc(100% - 110px);
  gap: 5px;
  overflow-y: scroll;
  flex-wrap: wrap;
}

.handle {
  position: absolute;
  top: 5px;
  left: 5px;
  cursor: move;
}

.ui {
  display: block;
  height: 2rem;
}

.entity-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-blue);
  color: #fff;
  padding: 20px 5px;
  border: 2px solid #000;
  height: fit-content;
  position: relative;
}

.entity-name {
  white-space: nowrap;
  display: inline-block;
  width: 6em;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  margin-bottom: 5px;
}

input {
  width: 8em;
  border-color: #000;
  font-size: 16px;
}

</style>