<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/favorites" class="nav-link">Избранные</router-link>
      <router-link to="/cart" class="nav-link">Корзина</router-link>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  created() {
    this.getProducts();
  },
  methods: {
    ...mapActions('products', {
      getProducts: 'getAllProducts',
    }),
  },
};
</script>

<style>
#app {
  max-width: 1024px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
}

html,
body,
#app {
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

.main-nav {
  padding: 0.4em;
  padding-top: 1em;
  background-color: #d8d8d8;
}

.nav-link {
  padding: 0.5em;
  font-size: 1em;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  border: 2px solid transparent;
}

.nav-link:not(:last-child)::after {
  content: '|';
  position: relative;
  top: -0.1em;
  right: -0.5em;
}
</style>
