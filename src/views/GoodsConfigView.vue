<script setup>
import {useEntitiesStore} from "@/stores/entities.js";
import {ref} from "vue";
import {useSelectedStore} from "@/stores/selected.js";
import {useRouter} from "vue-router";

const entitiesId = useEntitiesStore();
const category = ref([]);
category.value = Object.keys(entitiesId.list)
const selected = useSelectedStore();
const router = useRouter();
const next = () =>{
    router.push("/setting");
}

const check = (e ,entity_id) => {
    if (e.target.checked){
        selected.Add(entity_id)
    } else {
        selected.Remove(entity_id)
    }
}

const selectAll = () => {
    selected.list = [];
    for (let i = 0; i < entitiesId.list.length; i++){
        selected.Add(entitiesId.list[i])
    }
}

const clearAll = () => {
    selected.list = []
}
</script>

<template>
  <div class="actions">
    <div class="primary-button-pink small" @click="clearAll">清除选择</div>
    <div class="primary-button-pink small" @click="selectAll">全选</div>
    <div class="primary-button-pink small" @click="next">下一步</div>
  </div>
  <div class="entities-container">
      <div v-for="entityId in entitiesId.list" class="entity-box">
        <div class="checkbox">
          <input type="checkbox" :checked="selected.IsSelected(entityId)" @change="check($event,entityId)">
        </div>
        <div>
          <img :src="`icon/${entityId}.png`" alt="" class="ui">
        </div>
        <span class="name">{{$t(`entities.${entityId}`)}}</span>
      </div>
  </div>

</template>

<style scoped>
.small {
  padding: 1px 10px;
}

.checkbox{
  width: 100%;
  text-align: right;
  margin-top: -8px;
  margin-right: -8px;
}

.actions {
  height: 50px;
  background: var(--color-blue);
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
  gap: 5px;
}

.ui {
  display: inline-block;
  height: 2rem;
}

.entities-container {
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  height: calc(100% - 100px);
  gap: 5px;
  background: var(--color-blue);
  overflow-y: scroll;
  flex-wrap: wrap;
}

.entity-box{
  min-width: 10px;
  min-height: 70px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 2px solid #000;
  flex-grow: 1;
}

img{
  display: block;
}

.name{
  word-break:normal;
  width:6em;
  display:block;
  white-space:pre-wrap;
  word-wrap : break-word ;
  text-align: center;
}
</style>