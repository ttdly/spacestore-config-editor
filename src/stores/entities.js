import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ItemDataZh } from '@/assets/database'
import {ItemDataEn} from "@/assets/database_en.js";

export const useEntitiesStore = defineStore('entities', ()=>{
    const list = ref([]);

    function useChinese(){
        list.value = ItemDataZh
    }

    function useEnglish(){
        list.value = ItemDataEn
        console.log(list.value)
    }

    return {list, useChinese, useEnglish}
})
