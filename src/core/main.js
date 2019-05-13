import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.use(VeeValidate);

// Helpers
import './helpers/forms/form';
import './helpers/forms/errors';

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window._ = require('underscore');

Vue.config.productionTip = true;

new Vue({
    router,
    render: function(h) {
        return h(App);
    }
}).$mount('#app');
