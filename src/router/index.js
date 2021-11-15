import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Products from '@/views/Products.vue';
import Cart from '@/views/Cart.vue';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Products,
    },
    {
      path: '/cart',
      component: Cart,
    },
  ],
});
