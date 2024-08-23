import './assets/styles/main.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import i18n from './i18n';

import router from './router';

import SvgIcon from './components/shared/SvgIcon.vue';
import BaseInput from './components/ui/base/BaseInput.vue';
import BaseButton from './components/ui/base/BaseButton.vue';
import BaseTextButton from './components/ui/base/BaseTextButton.vue';

const app = createApp(App);

app.component('SvgIcon', SvgIcon);
app.component('BaseInput', BaseInput);
app.component('BaseButton', BaseButton);
app.component('BaseTextButton', BaseTextButton);

app.use(createPinia());
app.use(i18n);
app.use(router);

app.mount('#app');
