import { ref } from 'vue'
import { defineStore } from 'pinia'
import {entitiesId} from "@/assets/entitiesId.js";

export const useEntitiesStore = defineStore('entities', ()=>{
    const list = ref(entitiesId);

    return {list}
})
