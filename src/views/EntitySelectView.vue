<script setup>
import EntitiesCategory from "@/components/EntitiesCategory.vue";
import { ref } from 'vue'
import {ItemData} from '@/assets/database'


const database = ref(ItemData);
const keys = ref();

keys.value = Object.keys(ItemData)

</script>

<template>
    <template v-for="key in keys">
      <EntitiesCategory :category-name="key" :entities="database[key]"/>
    </template>
</template>
