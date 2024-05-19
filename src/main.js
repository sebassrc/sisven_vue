import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBank, faBuilding, faPencilAlt, faPhone, faPlus, faTag, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// íconos para la biblioteca de Font Awesome
library.add(faBank);
library.add(faBuilding);
library.add(faPencilAlt);
library.add(faPhone);
library.add(faPlus);
library.add(faTag);
library.add(faTrash);
library.add(faUser);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router).mount('#app');
