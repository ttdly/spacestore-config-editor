<script setup>
import EntitiesCategory from "@/components/EntitiesCategory.vue";
import { ref } from 'vue'
import {ItemData} from '@/assets/database'


const database = ref(ItemData);
const keys = ref();

keys.value = Object.keys(ItemData)

</script>

<template>
  <EntitiesCategory v-for="key in keys" :key="key" :category-name="key" :entities="database[key]"/>
</template>
