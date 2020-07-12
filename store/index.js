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
})

export default function () {
  return store
}
