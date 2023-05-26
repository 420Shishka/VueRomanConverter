import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdErroroutline } from "oh-vue-icons/icons";

addIcons(MdErroroutline);

createApp(App).component("v-icon", OhVueIcon).mount('#app');
