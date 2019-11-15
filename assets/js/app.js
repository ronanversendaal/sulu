const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');

require('../css/global.scss');
require('../css/app.css');

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import Example from './components/Example'
Vue.use(BootstrapVue)

/**
 * Create a fresh Vue Application instance
 */
new Vue({
    el: '#app',
    components: {Example}
});

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});
