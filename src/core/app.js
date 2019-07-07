import Vue from 'vue';
import Vuex from 'vuex';
import VeeValidate, { Validator } from 'vee-validate';
import App from './App.vue';
import i18n from './locales';
import router from './router/index';
import './registerServiceWorker';

Vue.use(Vuex);
Vue.use(VeeValidate);

if (['en', 'nl'].indexOf(i18n.locale) !== -1) {
    Validator.localize(
        i18n.locale,
        require(`vee-validate/dist/locale/${i18n.locale}`)
    );
}

// Turn the production tip message on
Vue.config.productionTip = true;

// Create the Axios instance with it's custom config
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;

window._ = require('underscore');

window.user = JSON.parse(localStorage.getItem('user'));

// Helpers
import './helpers/forms/form';
import './helpers/forms/errors';

new Vue({
    el: '#app',
    i18n,
    router,
    render: h => h(App)
});
