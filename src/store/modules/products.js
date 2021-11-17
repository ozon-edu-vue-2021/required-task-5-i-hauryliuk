import shopApi from '@/api/shop.js';
import Vue from 'vue';

const state = () => ({
  allProducts: [],
});

const getters = {
  getProductIndex: (state) => (id) =>
    state.allProducts.findIndex((item) => item.id === id),
  isFavorite: (state, getters) => (id) =>
    state.allProducts[getters.getProductIndex(id)].favorite,
};

const mutations = {
  setProducts: (state, products) => {
    state.allProducts = products;
  },
  addToFavorites: (state, id) => {
    const productToAdd = state.allProducts.find((item) => item.id === id);
    Vue.set(productToAdd, 'favorite', true);
  },
  removeFromFavorites: (state, id) =>
    (state.allProducts.find((item) => item.id === id).favorite = false),
};

const actions = {
  getAllProducts: async ({ commit }) => {
    const products = await shopApi.getProductsData();
    commit('setProducts', products);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
