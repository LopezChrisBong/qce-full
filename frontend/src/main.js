import './assets/main.css'
import './assets/stepper.scss'
import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'
import vue3GoogleOauth2 from 'vue3-google-login'
createApp(App).use(router).use(vue3GoogleOauth2,{
    client_id: import.meta.env.VITE_GOOGLE_CLIENTID
}).mount('#app')
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faClock);

