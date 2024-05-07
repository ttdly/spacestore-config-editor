<template>
  <div class="entities-category">
    <div class="category-name">{{ props.categoryName }}</div>
    <div class="entities-container">
      <EntityContainer v-for="(entity, index) in props.entities" :key="index" :entity="entity" :cate="categoryName" @click.stop="AddSelf(entity,categoryName)"/>
    </div>
  </div>
</template>

<script setup>
import EntityContainer from './EntityContainer.vue';
import { useSelectedEntitiesStore } from '@/stores/selectedEntities';

const props = defineProps(['categoryName', 'entities'])
const selectedEntities = useSelectedEntitiesStore();
const AddSelf = function(item, cate){
  selectedEntities.add(item, cate);
  popup.msg('添加成功！', { clickMaskClose: true });
}
</script>

<style scoped>
.entities-category{
  border: 1px solid;
  background: white;
}

.entities-category+.entities-category{
  margin-top: 10px;
}

.entity-container:hover {
  color: var(--color-pink);
  background-color: rgb(207, 207, 207);
}

.category-name {
  background-color: var(--color-pink);
  color: white;
  padding: 10px;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 10px;
}

.entities-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  padding: 10px;
}
</style>