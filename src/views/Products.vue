<template>
  <section>
    <h2>Продукты</h2>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Products',
  computed: {
    ...mapState('products', {
      products: 'allProducts',
    }),
  },
};
</script>
