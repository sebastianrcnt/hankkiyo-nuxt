import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const store = new Vuex.Store({
  state: {
    primaryAddress: {},
    secondaryAddress: '',
  },
  mutations: {
    setPrimaryAddress(state, primaryAddress) {
      state.primaryAddress = primaryAddress
    },
    setSecondaryAddress(state, secondaryAddress) {
      state.secondaryAddress = secondaryAddress
    },
  },
  actions: {},
  modules: {},
  plugins: [new VuexPersistence().plugin],
  getters: {
    fullAddress(store) {
      return store.primaryAddress.address + ' ' + store.secondaryAddress
    },
    isAddressSet(store) {
      return !!(store.primaryAddress && secondaryAddress)
    },
  },
})

export default function () {
  return store
}
