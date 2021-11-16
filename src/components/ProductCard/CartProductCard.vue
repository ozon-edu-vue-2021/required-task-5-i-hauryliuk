<template>
  <div class="product-card">
    <div class="product-card__content">
      <div class="product-card__info">
        <div class="product-card__img">
          <img
            class="product-img"
            :src="require('@/assets/images/' + product.imgName)"
            :alt="product.dish"
          />
        </div>
        <div class="product-card__descr">
          <h3 class="product-card__title">{{ product.dish }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
      <div class="product-card__summary">
        <p class="summary-text">
          {{ product.quantity }} шт. × {{ product.price }} ₽
        </p>
        <p class="summary-text summary-text_total">
          Всего: {{ getProductTotalCost }} ₽
        </p>
      </div>
    </div>
    <div class="product-card__actions">
      <Button
        label="Удалить"
        class="remove-btn"
        @button-clicked="removeFromCart(product.id)"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import { mapActions } from 'vuex';

export default {
  name: 'CartProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    Button,
  },
  computed: {
    getProductTotalCost() {
      return (this.product.quantity * this.product.price).toFixed(2);
    },
  },
  methods: {
    ...mapActions('cart', {
      removeFromCart: 'removeProductFromCart',
    }),
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 1em;
  border: 1px solid #d8d8d8;
  border-radius: 0.5em;
}

.product-card__content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}

.product-card__info {
  display: flex;
}

.product-card__img {
  max-width: 150px;
  margin-right: 1em;
}

.product-img {
  object-fit: cover;
  max-width: 100%;
  border-radius: 4px;
  vertical-align: top;
}

.product-card__descr {
  display: flex;
  flex-direction: column;
  max-width: 70%;
}

.product-card__title {
  margin: 0;
}

.product-card__summary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1em;
}

.summary-text {
  margin: 0;
  white-space: nowrap;
  text-align: right;
}

.summary-text_total {
  margin-bottom: 0;
  padding-top: 0.5em;
  border-top: 1px solid #6284a3;
}

.product-card__actions {
  align-self: end;
}

.remove-btn {
  border: none;
  padding: 0;
  font-size: 0.8em;
  color: inherit;
  background-color: transparent;
}
</style>
