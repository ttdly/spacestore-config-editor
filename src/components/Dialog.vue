<script setup>
import {ref, watch} from "vue";

const props = defineProps(['show', 'title', 'count'])
const show = ref(true)
const close = ()=>{
    show.value = false
}

watch(() => props.count, () => {
    if (show.value !== props.show) {
        show.value = props.show
    }
});
</script>

<template>
  <div class="dialog-container" v-show="props.show && show">
    <div class="shadow" @click="close"></div>
    <div class="window-container">
      <div class="window">
        <div class="window-head">
          {{props.title}}
        </div>
        <div class="window-content">
          <slot name="content"></slot>
        </div>
        <div class="window-actions">
          <div class="primary-button-pink small" @click="close">{{$t("action.close")}}</div>
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-container {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 998;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.8;
  height: 100%;
  width: 100%;
}

.window-container {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: absolute;
  height: 100vh;
  width: 100vw;
}

.window-head {
  background: var(--color-pink);
  color: #fff;
  text-align: center;
  line-height: 2rem;
  border-bottom: 1px solid #181818;
}

.window {
  min-width: 200px;
  max-width: 240px;
  min-height: 200px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #181818;
}

.window-content {
  flex: 1;
  padding: 5px;
  color: #181818;
}
.window-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
</style>
