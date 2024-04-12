<template>
  <div class="shop-window">
    <template v-for="item, index in selectedEntities.list">
      <ShopCard :item-info="item" :index="index" @click="showUpdateData(item, index)" />
    </template>
  </div>
  <div class="update-data-window" @click="() => { showUpdateDataWindow = false }" v-show="showUpdateDataWindow">
    <div class="updata-data-form" @click.stop="()=>{}">
      <input type="number"  placeholder="数量" @click.stop="" v-model="dataForm.quantity">
      <input type="number" placeholder="价格"  @click.stop="" v-model="dataForm.price">
      <div class="confirm-button" @click.stop="updateData">确认</div>
    </div>
  </div>
</template>

<script setup>
import { useSelectedEntitiesStore } from '@/stores/selectedEntities';
import ShopCard from './ShopCard.vue';
import { ref } from 'vue'

const selectedEntities = useSelectedEntitiesStore();
const showUpdateDataWindow = ref(false);
const dataForm = ref({
  quantity: 0,
  price: 0,
  index: 0
})


const showUpdateData = function (item, index) {
  dataForm.value.price = item.price
  dataForm.value.quantity = item.quantity
  dataForm.value.index = index
  showUpdateDataWindow.value = true
}

const updateData = function(){
  selectedEntities.update(dataForm.value)
  showUpdateDataWindow.value = false
}

</script>

<style scoped>
.shop-window {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.update-data-window {
  background-color: rgba(0, 0, 0, 0.637);
  padding: 48px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.updata-data-form {
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: var(--color-blue);
  border: 1px solid black;
  gap: 5px;
}

input {
  border-radius: 0;
  height: 2rem;
  color: black;
  font-size: 16px;
  padding-left: 5px;
}

.confirm-button {
  background-color: var(--color-pink);
  font-size: 16px;
  padding: 2px;
  text-align: center;
  color: white;
  border-top: black 1px solid;
  border-left: black 1px solid;
  border-right: gray 1px solid;
  border-bottom: gray 1px solid;
}

.confirm-button:hover {
  background-color: var(--color-pink-light);

}
</style>