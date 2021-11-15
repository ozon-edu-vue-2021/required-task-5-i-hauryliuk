<template>
  <section>
    <h2>Продукты</h2>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Products',
  created() {
    this.getProducts();
  },
  computed: {
    ...mapState('products', {
      products: 'allProducts',
    }),
  },
  methods: {
    ...mapActions('products', {
      getProducts: 'getAllProducts',
    }),
  },
};
</script>
