import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  // state คือ fields ใน oop
  state: {
    data: [],
  },

  getters: {
    records: (state) => state.data,
  },

  // mutations เหมือน private setter ใน oop,
  // เอาไว้เปลี่ยนแปลงค่าใน state
  mutations: {
    fetch(state, { res }) {
      state.data = res.data;
    },
    add(state, { payload }) {
      state.data.push(payload);
    },
  },

  // actions เหมือน public methods ใน oop,
  // ให้ภายนอกเรียกใช้ หรือ ดึงข้อมูลจากภายนอก
  actions: {
    // commit เป็น keyword ไว้เรียก mutation
    async fetchRecord({ commit }) {
      let res = await axios.get("/json/data.json");
      commit("fetch", { res });
    },

    addRecord({ commit }, payload) {
      commit("add", { payload });
    },
  },

  modules: {},
});
