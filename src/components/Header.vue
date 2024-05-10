<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import {useEntitiesStore} from "@/stores/entities.js";
const selected = ref()
const {locale} = useI18n();
selected.value = locale.value;
const entities = useEntitiesStore();
const change = (lang) => {
    console.log(lang);
    locale.value = lang;
}
</script>

<template>
  <div class="header">
    <div class="title">{{$t("nav.siteName")}}</div>
    <div class="nav">
      <a href="https://github.com">{{$t("nav.repo")}}</a>
      <div class="switch-language">
        Language
        <select id="language" v-model="selected" @change="change(selected)">
          <option value="zh-CN" @select="change('zh')">中文</option>
          <option value="en-US" @select="change('en')">English</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-pink);
  color: #fff;
  height: 50px;
  padding: 0 15px;
  border-bottom: #181818 1px solid;
}

.title {
  font-size: 1.2rem;
}

.nav {
  display: flex;
  align-items: center;
  user-select: none;
}

</style>