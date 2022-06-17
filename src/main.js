import { createApp } from 'vue'
import App from './App.vue'
import VueMobileDetection from 'vue-mobile-detection'
import router from './router'
import $ from 'jquery';
import gsap from 'gsap';
createApp(App).use(VueMobileDetection).use($).use(gsap).use(router).mount('#app')
