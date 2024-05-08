import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createI18n} from "vue-i18n";
import App from './App.vue'
import router from './router'
import en from "@/language/en.js";
import zh from "@/language/zh.js";
import {useEntitiesStore} from "@/stores/entities.js";


const i18n = new createI18n({
    legacy: false,
    messages: {
        en,
        zh
    },
    locale: navigator.language,
})

const app = createApp(App);
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

const entities = useEntitiesStore()
entities.useChinese()