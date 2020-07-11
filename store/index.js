import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    firstAddress: '',
    secondAddress: '',
  },
  mutations: {
    setFirstAddress(state, firstAddress) {
      state.firstAddress = firstAddress
    },
    setSecondAddress(state, secondAddress) {
      state.secondAddress = secondAddress
    },
  },
  actions: {},
  modules: {},
})

export default function () {
  return store
}
