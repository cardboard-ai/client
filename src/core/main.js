import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import Router from 'vue-router';
import router from './router';
import './registerServiceWorker';

Vue.use(VeeValidate);
Vue.use(Router);

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
    router,
    render: function(h) {
        return h(App);
    }
}).$mount('#app');
