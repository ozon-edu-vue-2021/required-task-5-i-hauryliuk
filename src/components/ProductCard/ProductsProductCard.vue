<template>
  <div class="product-card">
    <div v-if="isFavorite(product.id)" class="fav-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455">
      <path d="M326.632,10.346c-38.733,0-74.991,17.537-99.132,46.92c-24.141-29.384-60.398-46.92-99.132-46.92
        C57.586,10.346,0,67.931,0,138.714c0,55.426,33.05,119.535,98.23,190.546c50.161,54.647,104.728,96.959,120.257,108.626l9.01,6.769
        l9.01-6.768c15.529-11.667,70.098-53.978,120.26-108.625C421.949,258.251,455,194.141,455,138.714
        C455,67.931,397.414,10.346,326.632,10.346z M334.666,308.974c-41.259,44.948-85.648,81.283-107.169,98.029
        c-21.52-16.746-65.907-53.082-107.166-98.03C61.236,244.592,30,185.717,30,138.714c0-54.24,44.128-98.368,98.368-98.368
        c35.694,0,68.652,19.454,86.013,50.771l13.119,23.666l13.119-23.666c17.36-31.316,50.318-50.771,86.013-50.771
        c54.24,0,98.368,44.127,98.368,98.368C425,185.719,393.763,244.594,334.666,308.974z"/>
      </svg>
    </div>
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
      <Button
        v-if="!isFavorite(product.id)"
        label="В избранное"
        class="btn_link"
        @button-clicked="addToFavorites(product.id)"
      />
      <Button
        v-else
        label="Из избранного"
        class="btn_link"
        @button-clicked="removeFromFavorites(product.id)"
      />
    </div>
    <div class="product-card__action">
      <Button
        v-if="!quantity(product.id)"
        label="В корзину"
        @button-clicked="addToCart(product.id)"
      />
      <QuantityControl
        v-else
        :value="quantity(product.id)"
        @decrease="deleteFromCart(product.id)"
        @increase="addToCart(product.id)"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import QuantityControl from '@/components/QuantityControl.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ProductsProductCart',
  components: {
    Button,
    QuantityControl,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('cart', {
      quantity: 'getQuantityById',
    }),
    ...mapGetters('products', ['isFavorite']),
  },
  methods: {
    ...mapActions('cart', {
      addToCart: 'addProductToCart',
      deleteFromCart: 'removeProductFromCart',
    }),
    ...mapMutations('products', ['addToFavorites', 'removeFromFavorites']),
  },
};
</script>

<style scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  border: 1px solid #d8d8d8;
  border-radius: 0.5em;
  box-shadow: 0 0 10px #dddddd;
}

.fav-icon {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 24px;
  height: 24px;
  padding: 6px;
  border-radius: 100%;
  background-color: #fff;
}

.product-card__info {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
}

.product-card__title {
  margin: 0;
}

.product-card__img {
  order: -1;
  margin-bottom: 1em;
  border-radius: 6px;
  vertical-align: top;
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

.btn_link {
  align-self: start;
  width: auto;
  padding: 0;
  font-size: 0.8em;
  border: none;
  background: transparent;
  color: #8f8f8f;
}

.product-card__action {
  display: flex;
  justify-content: center;
}
</style>
