const state = () => ({
  cart: [],
});

const getters = {
  getCartProducts: (state, getters, rootState) => {
    return state.cart.map(({ id, quantity }) => ({
      ...rootState.products.allProducts.find((product) => product.id === id),
      quantity,
    }));
  },
  getCartTotalCost: (state, getters) => {
    return getters.getCartProducts
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  },
  getCartTotalQuantity: (state, getters) => {
    return getters.getCartProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );
  },
  getCartProductIndex: (state) => (id) =>
    state.cart.findIndex((item) => item.id === id),
};

const mutations = {
  addProduct: (state, id) => {
    state.cart.push({
      id: id,
      quantity: 1,
    });
  },
  incrementProductQuantity: (state, index) => {
    state.cart[index].quantity++;
  },
};

const actions = {
  addProductToCart: ({ commit, getters }, productId) => {
    const cartProductIndex = getters.getCartProductIndex(productId);
    if (cartProductIndex !== -1) {
      commit('incrementProductQuantity', cartProductIndex);
    } else {
      commit('addProduct', productId);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
