<script setup>
import {useEntitiesStore} from "@/stores/entities.js";
import {ref} from "vue";

const entities = useEntitiesStore();
const category = ref([]);
category.value = Object.keys(entities.list)
</script>

<template>
  <template v-for="cate in category">
    <div class="category">{{cate}}</div>
  </template>
</template>

<style scoped>

</style>