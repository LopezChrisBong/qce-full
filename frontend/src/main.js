import './assets/main.css'
import './assets/stepper.scss'
import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'
createApp(App).use(router).mount('#app')
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faClock);