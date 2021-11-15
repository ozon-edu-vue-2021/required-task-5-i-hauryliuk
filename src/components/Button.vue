<template>
  <button @click="clickHandler">{{label}}</button>
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
