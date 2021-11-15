<template>
  <div>
    <h3>{{product.dish}}</h3>
    <div>
      <img :src="require('@/assets/images/' + product.imgName)" :alt="product.dish">
    </div>
    <p>{{product.price}} ₽</p>
    <Button
      label="В корзину"
      @button-clicked="addToCart"
    />
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'ProductCart',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    Button,
  },
  methods: {
    addToCart() {
      console.log('Add to Cart');
    },
  },
};
</script>
