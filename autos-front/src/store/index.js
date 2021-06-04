import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    autos: [],
  },
  mutations: {
    SET_AUTOS(state, autos) {
      state.autos = autos;
    },
  },
  actions: {
    setAutos({ commit }) {
      axios.get("http://localhost:3000/autos").then((res) => {
        commit("SET_AUTOS", res.data);
      });
    },
  },
  modules: {},
});
