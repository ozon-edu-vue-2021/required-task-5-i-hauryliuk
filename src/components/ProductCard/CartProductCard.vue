<template>
  <div>
    <h3>{{ product.dish }}</h3>
    <div>
      <img
        :src="require('@/assets/images/' + product.imgName)"
        :alt="product.dish"
      />
    </div>
    <p>{{ product.quantity }} шт. × {{ product.price }} ₽</p>
  </div>
</template>

<script>

export default {
  name: 'CartProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
