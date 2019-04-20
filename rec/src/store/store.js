import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const vuexPersistStorage = new VuexPersist({
  key: 'recipe-app',
  storage: localStorage,
  modules: ['user']
})

const vuexPersistCookies = new VuexPersist({
  key: 'recipe-app-session',
  restoreState: (key, storage) => Cookies.getJSON(key),
  saveState: (key, state, storage) =>
    Cookies.set(key, state, {
      expires: 30
    }),
  modules: ['token', 'isLoggedIn']
})

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLoggedIn: false,
    savedProduct: {
      title: null,
      describtion: null,
      resType: null,
      resTags: null,
      AddedProducts: [],
      timetocook: null,
      imagefile: null,
      kcal: null,
      fat: null,
      carbs: null,
      protein: null
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    saveProduct (state, savedProduct) {
      state.savedProduct = savedProduct
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    saveProduct ({commit}, savedProduct) {
      commit('saveProduct', savedProduct)
    }
  },
  plugins: [vuexPersistStorage.plugin, vuexPersistCookies.plugin]
})
