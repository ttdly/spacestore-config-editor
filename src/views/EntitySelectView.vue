<script setup>
import EntitiesCategory from "@/components/EntitiesCategory.vue";
import { ref } from 'vue'
import {ItemDataZh} from '@/assets/database'


const database = ref(ItemDataZh);
const keys = ref();

keys.value = Object.keys(ItemDataZh)

</script>

<template>
  <EntitiesCategory v-for="key in keys" :key="key" :category-name="key" :entities="database[key]"/>
</template>
