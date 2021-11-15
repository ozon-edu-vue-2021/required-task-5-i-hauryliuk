<template>
  <section>
    <h2 class="title">Корзина</h2>
    <div class="cart">
      <template v-if="cartProducts.length">
        <CartProductCard v-for="product in cartProducts" :key="product.uid" :product="product" />
      </template>
      <template v-else>
        <p class="no-products">Корзина пуста</p>
      </template>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';
import CartProductCard from '@/components/ProductCard/CartProductCard.vue';

export default {
  name: 'Cart',
  components: {
    CartProductCard,
  },
  computed: {
    ...mapGetters('cart', {
      cartProducts: 'getCartProducts',
    }),
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
.no-products {
  font-size: 2em;
  text-align: center;
}
</style>