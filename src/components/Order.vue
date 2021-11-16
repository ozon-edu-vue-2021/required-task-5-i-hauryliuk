<template>
  <div class="order-block">
    <div class="order-block__data">
      <p class="order-block__title">Ваша корзина</p>
      <div class="order-block__info">
        <p>
          Всего товаров: <span>{{ totalQuantity }}</span>
        </p>
        <p>
          Общая стоимость: <span>{{ totalCost }}</span> ₽
        </p>
      </div>
    </div>
    <div class="order-block__action">
      <Button
        label="Оформить заказ"
        @button-clicked="checkoutOrder(cartProducts)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Button from '@/components/Button.vue';

export default {
  name: 'Order',
  components: {
    Button,
  },
  computed: {
    ...mapGetters('cart', {
      cartProducts: 'getCartProducts',
      totalQuantity: 'getCartTotalQuantity',
      totalCost: 'getCartTotalCost',
    }),
  },
  methods: {
    checkoutOrder(orderProducts) {
      const orderSummary = orderProducts.map(
        (product, index) =>
          `${index + 1}: ${product.id} | ${product.dish} | ${product.price} × ${
            product.quantity
          } = ${(product.quantity * product.price).toFixed(2)}`
      );
      orderSummary.push(`\nОбщее количество: ${this.totalQuantity}`);
      orderSummary.push(`Общее стоимость: ${this.totalCost}`);
      alert(orderSummary.join('\n'));
    },
  },
};
</script>

<style scoped>
.order-block {
  padding: 1em;
  margin: 1em;
  border: 1px solid #d8d8d8;
  border-radius: 0.5em;
}

.order-block__data {
  margin-bottom: 2em;
  border: 1px solid #d8d8d8;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.order-block__title {
  padding: 1em;
  margin: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
  text-align: center;
  background-color: #e4e4e4;
}

.order-block__info {
  padding: 1em;
}
</style>
