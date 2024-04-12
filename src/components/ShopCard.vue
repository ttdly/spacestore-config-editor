<template>
  <div class="shop-card">
    <EntityContainer :entity="itemInfo" :cate="itemInfo.cate" />
    <div>
      <span class="item-quantity">x{{ itemInfo.quantity }}</span>
      <div class="item-price" @click.stop="removeThis(index)">
        <img src="/coin.png" alt="coin" class="price-icon">
        {{ itemInfo.price }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSelectedEntitiesStore } from '@/stores/selectedEntities';
import EntityContainer from './EntityContainer.vue';
const props = defineProps(['itemInfo', 'index'])

const selectedEntities = useSelectedEntitiesStore()

const removeThis = function(index) {
  console.log(index)
  selectedEntities.remove(index)
}

</script>

<style scoped>
.shop-card {
  text-align: center;
  background-color: var(--color-blue);
  color: white;
  width: 120px;
  cursor: pointer;
  padding-top: 10px;
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.shop-card:hover {
  background-color: var(--color-blue-light);
}

.delete-card-button {
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: var(--color-pink);
  width: 20px;
  height: 20px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-card-button:hover {
  background-color: var(--color-pink-light);
}

.price-icon {
  height: 1.5rem;
}

.item-price {
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: center;
  width: 100%;
  border-top: 1px solid black;
}

.item-price:hover{
  background: var(--color-pink);
}
</style>