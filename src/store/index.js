import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/store/modules/products.js';
import cart from '@/store/modules/cart.js';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    products,
    cart,
  },
});
