<script setup>
import {useEntitiesStore} from "@/stores/entities.js";
import {ref} from "vue";
import {useSelectedEntitiesStore} from "@/stores/selectedEntities.js";

const entities = useEntitiesStore();
const category = ref([]);
category.value = Object.keys(entities.list)

const selectedEntities = useSelectedEntitiesStore();

const check = (item, cate)=>{
    selectedEntities.add(item, cate)
}

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
  <div class="container">
    <div class="entities-list">
      <div v-for="cate in Object.keys(entities.list)" class="category-list">
        <div class="cat">{{cate}}</div>
        <div class="entities-container">
          <template v-for="entity in entities.list[cate]">
            <div class="primary-button-blue entity-container" @click="check(entity, cate)">
              <img :src="`icon/${entity.id}.png`" alt="" class="ui">
              <span>{{entity.name}}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="selected-list">

      <div class="selected-container">
        <table width="100%">
          <tr>
            <td> ui </td>
            <td> {{$t("table.name")}} </td>
            <td> {{$t("table.quantity")}} </td>
            <td> {{$t("table.price")}} </td>
            <td> {{$t("table.action")}} </td>
          </tr>
          <tr v-for="(entity,index) in selectedEntities.list">
            <th><img :src="`icon/${entity.id}.png`" alt="" class="ui"></th>
            <th>{{entity.name}}</th>
            <th><input type="number" v-model="entity.quantity"></th>
            <th><input type="number" v-model="entity.price"></th>
            <th><button @click="selectedEntities.remove(index)">{{$t("action.delete")}}</button></th>

          </tr>
        </table>
        <div class="actions">
          <div class="primary-button-blue" @click="downLoadJson">{{$t("action.downloadConfigureFile")}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ui{
  display: inline-block;
  height: 1rem;
}

.cat{
  background-color: var(--color-pink);
  color: #fff;
  padding: 10px;
  text-align: center;
}

.container{
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  height: calc(100% - 60px);
  gap: 10px;
}

.entities-list{
  flex: 1;
  overflow-y: scroll;
  height: 100%;
  border: 2px solid #000;
  padding: 10px;
}

.category-list{
  margin-bottom: 10px;
}

.entities-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-between;
  margin-top: 10px;
}

.entity-container {
  display: flex;
  flex-shrink: 1;
  align-items: center;
  flex-grow: 1;
  gap: 5px;

}

.selected-list{
  flex: 1;
  overflow-y: scroll;
  border: 2px solid #000;
  padding: 5px;
}

.selected{
  display: flex;
  align-items: center;
  gap: 10px;
}

</style>