import Vue from "vue";
import Vuex from "vuex";
import fb from "../firebaseConfig";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    principles: []
  },
  mutations: {
    setPrinciples(state, payload) {
      if (payload) state.principles = payload;
      else state.principles = [];
    }
  },
  actions: {
    async getPrinciples({ commit }) {
      const snapshot = await fb.principlesCollection.get();
      const res = snapshot.docs.map(doc => doc.data());
      
      commit("setPrinciples", res);
    }
  },
  modules: {}
});
