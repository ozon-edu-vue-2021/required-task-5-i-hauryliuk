import shopApi from '@/api/shop.js';

const state = () => ({
  allProducts: [],
});

const mutations = {
  setProducts: (state, products) => {
    state.allProducts = products;
  },
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
  mutations,
  actions,
};
