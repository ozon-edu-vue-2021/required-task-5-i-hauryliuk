<template>
  <div class="product-card">
    <div class="product-card__info">
      <h3 class="product-card__title">{{ product.dish }}</h3>
      <div class="product-card__img">
        <img
          class="product-img"
          :src="require('@/assets/images/' + product.imgName)"
          :alt="product.dish"
        />
      </div>
      <p class="product-card__price">{{ product.price }} ₽</p>
    </div>
    <div class="product-card__action">
      <Button
        label="В корзину"
        @button-clicked="addToCart(product.id)"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import {mapActions} from 'vuex';

export default {
  name: 'ProductsProductCart',
  components: {
    Button,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('cart', {
      addToCart: 'addProductToCart',
    }),
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  border: 1px solid #d8d8d8;
  border-radius: 0.5em;
  box-shadow: 0 0 10px #dddddd;
}

.product-card__info {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

.product-card__title {
  margin: 0;
}

.product-card__img {
  order: -1;
  margin-bottom: 1em;
  border-radius: 6px;
}

.product-img {
  object-fit: cover;
  max-width: 100%;
  border-radius: 4px;
}

.product-card__price {
  align-self: end;
  margin: 0;
  font-weight: bold;
}
</style>
