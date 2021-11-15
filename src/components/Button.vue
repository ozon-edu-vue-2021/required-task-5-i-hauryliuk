<template>
  <button class="btn" @click="clickHandler">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Кнопка'
    }
  },
  methods: {
    clickHandler() {
      this.$emit('button-clicked')
    },
  },
};
</script>

<style scoped>
.btn {
  display: block;
  width: 100%;
  padding: 0.3em;
}
</style>