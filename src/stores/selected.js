import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useSelectedStore = defineStore('selected', ()=>{
    const list = ref([
    ]);

    function Add(entity_id){
        list.value.push({
            id: entity_id,
            price:100,
            quantity: 1,
        })
    }

    function Remove(entity_id){
        list.value = list.value.filter(function (item) {
            return !(item.id === entity_id)
        })
    }

    function IsSelected(entityId){
        for(let i = 0; i < list.value.length; i++){
            if(list.value[i].id === entityId){
                return true;
            }
        }
        return false;
    }

    return {list, Add, Remove, IsSelected}
})
