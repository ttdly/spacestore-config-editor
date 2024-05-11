import {defineStore} from "pinia";
import {ref} from "vue";

export const useCanSellItems = defineStore('sellItems', () => {
    const list = ref([]);
    const price = ref([]);

    function IsMarkSell(id) {
        return list.value.indexOf(id) !== -1;
    }

    function TuningList() {
        const result = [];
        for (let i = 0; i < list.value.length; i++) {
            result.push({
                id: list.value[i],
                price: price.value[i],
            });
        }
        return result;
    }

    return {list, price, IsMarkSell, TuningList};
})