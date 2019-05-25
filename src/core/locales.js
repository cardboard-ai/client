import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { Validator } from 'vee-validate';
import nl from 'vee-validate/dist/locale/nl';

Vue.use(VueI18n);

function loadTranslations() {
    const locales = require.context(
        './lang',
        true,
        /[A-Za-z0-9-_,\s]+\.json$/i
    );

    const translations = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            translations[locale] = locales(key);
        }
    });

    return translations;
}

var i18n = new VueI18n({
    locale: JSON.parse(localStorage.getItem('user')).locale || 'en',
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    messages: loadTranslations()
});

export default i18n;
