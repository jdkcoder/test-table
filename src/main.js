import { createApp } from 'vue'
import './style.css'
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import App from './App.vue'
import 'quasar/src/css/index.sass'

createApp(App).use(Quasar, {
    plugins: {} // import Quasar plugins and add here
  }).mount('#app')
