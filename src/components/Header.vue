<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";

const selected = ref()
const {locale} = useI18n();
selected.value = locale.value;
const change = (lang) => {
    console.log(lang);
    locale.value = lang;
}
</script>

<template>
  <div class="header">
    <div class="title">{{$t("nav.siteName")}}</div>
    <div class="nav">
      <router-link to="/">{{$t("nav.goods")}}</router-link>
      <router-link to="/sell">{{$t("nav.sell")}}</router-link>
      <a href="https://github.com/ttdly/spacestore-config-editor" target="_blank">{{$t("nav.repo")}}</a>
      <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3215097987" target="_blank">{{$t("nav.mod")}}</a>
      <div class="switch-language">
        {{$t("nav.language")}}
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