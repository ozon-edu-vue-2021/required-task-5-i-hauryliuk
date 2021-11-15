<template>
  <section>
    <h2 class="title">Товары</h2>
    <div class="products">
      <template v-if="products.length">
        <ProductCard v-for="product in products" :key="product.uid" :product="product" />
      </template>
      <template v-else>
        <p class="no-products">Товары отсутствуют</p>
      </template>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '@/components/ProductCard';

export default {
  name: 'Products',
  components: {
    ProductCard,
  },
  computed: {
    ...mapState('products', {
      products: 'allProducts',
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