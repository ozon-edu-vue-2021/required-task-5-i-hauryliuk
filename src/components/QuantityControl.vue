<template>
  <div class="quantity-control">
    <button
      class="quantity-control__button"
      @click="minusClicked"
    >−</button>
    <span class="quantity-control__value">{{ value }}</span>
    <button
      class="quantity-control__button"
      @click="plusClicked"
    >+</button>
  </div>
</template>

<script>
export default {
  name: 'QuantityControl',
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    minusClicked() {
      this.$emit('decrease');
    },
    plusClicked() {
      this.$emit('increase');
    },
  },
};
</script>

<style scoped>
.quantity-control {
  display: flex;
  align-items: center;
  padding: 0 1em;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  background-color: #f0f0f0;
}

.quantity-control__button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6em;
  height: 1.6em;
  border: 1px solid #d8d8d8;
  border-radius: 50%;
  cursor: pointer;
  color: #8f8f8f;
  background-color: #fff;
}

.quantity-control__value {
  padding: 0.3em 0.3em 0.2em;
  margin-right: 0.5em;
  margin-left: 0.5em;
  font-size: 1.2em;
}
</style>