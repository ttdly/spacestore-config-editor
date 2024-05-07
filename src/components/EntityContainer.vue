<template>
  <div class="entity-container" >
    <div>
      <img :src="`icon/${props.entity.id}.png`" alt="" class="ui">
    </div>
    {{ props.entity.name }}
  </div>
</template>

<script setup>
const props = defineProps(['entity', 'cate'])
</script>

<style scoped>
.entity-container {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  color: #000;
}

.ui{
  width: 40px;
}

.entity-icon{
  flex-shrink: 0;
}


</style>