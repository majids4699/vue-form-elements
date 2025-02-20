require('bootstrap')
import Vue from 'vue';
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';
import Multiselect from '@processmaker/vue-multiselect/src/Multiselect';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import 'bootstrap/dist/css/bootstrap.css'

import DemoApp from './DemoApp'

// Allow strings to be wrapped in $t(...) for translating
// outside this package. This standalone app just returns
// the English string
Vue.use(VueI18Next)
i18next.init({lng: 'en'})
Vue.mixin({ i18n: new VueI18Next(i18next) })
Vue.component('Multiselect', Multiselect);
Vue.use(VuePersianDatetimePicker, {
    name: 'custom-date-picker',
    props: {
        inputFormat: 'YYYY-MM-DD HH:mm',
        format: 'jYYYY-jMM-jDD HH:mm',
        editable: false,
        inputClass: 'form-control my-custom-class-name',
        placeholder: 'Please select a date',
        altFormat: 'YYYY-MM-DD HH:mm',
        color: '#00acc1',
        autoSubmit: false,
    }
});
new Vue({
    el: '#app',
    render: h => h(DemoApp)
})