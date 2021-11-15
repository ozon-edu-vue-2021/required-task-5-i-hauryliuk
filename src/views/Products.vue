<template>
  <section>
    <h2 class="title">Товары</h2>
    <div class="products">
      <template v-if="products.length">
        <ProductsProductCard
          v-for="product in products"
          :key="product.uid"
          :product="product"
        />
      </template>
      <template v-else>
        <p class="no-products">Товары отсутствуют</p>
      </template>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import ProductsProductCard from '@/components/ProductCard/ProductsProductCard.vue';

export default {
  name: 'Products',
  components: {
    ProductsProductCard,
  },
  computed: {
    ...mapState('products', {
      products: 'allProducts',
    }),
  },
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
  padding: 0 12px;
}

.title {
  text-align: center;
}

.no-products {
  font-size: 2em;
  text-align: center;
}
</style>