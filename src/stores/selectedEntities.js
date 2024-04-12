import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectedEntitiesStore = defineStore('selectedEntities', () => {
  const list = ref([])
  function add(item ,cate){
    list.value.push(Object.assign(item,{
      quantity: 1,
      price: 100,
      cate: cate
    }))
  }

  function remove(index){
    list.value.splice(index,1)
  }

  function update(data){
    const index = data.index
    list.value[index].quantity = data.quantity
    list.value[index].price = data.price
  }

  function contains(id){
    list.value.forEach(element => {
      if (element.id == id) return true
    });
  }

  function tuningList(){
    return list.value.map(({id, quantity, price})=>{
      return{
        id:id,
        quantity:quantity,
        price:price
      }
    })
  }
  return { list, add, remove, update, contains, tuningList }
})
