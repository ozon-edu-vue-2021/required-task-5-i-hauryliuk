<template>
  <div>
    <h3>{{ product.dish }}</h3>
    <div>
      <img
        :src="require('@/assets/images/' + product.imgName)"
        :alt="product.dish"
      />
    </div>
    <p>{{ product.price }} ₽</p>
    <Button
      label="В корзину"
      @button-clicked="addToCart(product.id)"
    />
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
