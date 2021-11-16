<template>
  <section>
    <h2 class="title">Корзина</h2>
    <div class="cart">
      <template v-if="cartProducts.length">
        <div class="cart__content">
          <CartProductCard
            v-for="product in cartProducts"
            :key="product.uid"
            :product="product"
          />
        </div>
        <div class="cart__order">
          <Order />
        </div>
      </template>
      <template v-else>
        <p class="no-products">Корзина пуста</p>
      </template>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CartProductCard from '@/components/ProductCard/CartProductCard.vue';
import Order from '@/components/Order.vue';

export default {
  name: 'Cart',
  components: {
    CartProductCard,
    Order,
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

.cart {
  display: flex;
  padding: 0 12px;
}

.cart__order {
  min-width: 30%;
  flex-shrink: 0;
}

.no-products {
  flex: 1 0;
  justify-self: stretch;
  font-size: 2em;
  text-align: center;
}
</style>
