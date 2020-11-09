import Vue from 'vue'
import Vuex from 'vuex'
import Reservation2 from './components/Reservation2.vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    childrenCount: 0,
    adultCount: 1,
    childrenAge: [],
    date1:'',
    date2: {}
  },
  mutations: {
    increment(state) {
      state.childrenCount++
    },
    increment2(state) {
      state.adultCount++
    },
    subtract(state) {
      state.childrenCount = state.childrenCount - 1;
    },
    
    subtract2(state) {
      state.adultCount = state.adultCount - 1;
    },
    addAge(state) {
      state.childrenAge++;
    },
    
    subtractAge(state) {
      state.childrenAge = state.childrenAge - 1;
    },
    dateDivide(state) {
      state.date2 = state.date1.split('~')
    }
  },
  actions: {
  },
  modules: {
  }
})
