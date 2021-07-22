import Vue from "vue";
import Vuex from "vuex";

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
    edit(state, { payload }) {
      state.data[payload.index].name = payload.name;
      state.data[payload.index].type = payload.type;
    },
  },

  // actions เหมือน public methods ใน oop,
  // ให้ภายนอกเรียกใช้ หรือ ดึงข้อมูลจากภายนอก
  actions: {
    // commit เป็น keyword ไว้เรียก mutation
    fetchRecord({ commit }) {
      let res = {
        data: [
          {
            date: "2021-01-01",
            info: "ค่าขนม",
            type: "Income",
            amount: 5000,
          },
          {
            date: "2021-01-31",
            info: "รายจ่ายรวม",
            type: "Expense",
            amount: 4500,
          },
          {
            date: "2021-02-01",
            info: "ค่าขนม",
            type: "Income",
            amount: 5000,
          },
          {
            date: "2021-02-28",
            info: "รายจ่ายรวม",
            type: "Expense",
            amount: 3800,
          },
          {
            date: "2021-03-01",
            info: "ค่าขนม",
            type: "Income",
            amount: 5000,
          },
          {
            date: "2021-03-31",
            info: "รายจ่ายรวม",
            type: "Expense",
            amount: 4250,
          },
          {
            date: "2021-04-01",
            info: "ค่าขนม",
            type: "Income",
            amount: 5000,
          },
          {
            date: "2021-04-30",
            info: "รายจ่ายรวม",
            type: "Expense",
            amount: 3750,
          },
          {
            date: "2021-05-01",
            info: "ค่าขนม",
            type: "Income",
            amount: 5000,
          },
          {
            date: "2021-05-01",
            info: "ลงทุน",
            type: "Expense",
            amount: 1000,
          },
          {
            date: "2021-05-02",
            info: "เติมเกมส์",
            type: "Expense",
            amount: 1000,
          },
          {
            date: "2021-05-05",
            info: "ค่า buffet",
            type: "Expense",
            amount: 499,
          },
          {
            date: "2021-05-14",
            info: "ค่า buffet",
            type: "Expense",
            amount: 699,
          },
          {
            date: "2021-05-30",
            info: "ค่า netflix",
            type: "Expense",
            amount: 420,
          },          
          {
            date: "2021-06-01",
            info: "ค่าขนม",
            type: "Income",
            amount: 5000,
          },
          {
            date: "2021-06-01",
            info: "ลงทุน",
            type: "Expense",
            amount: 1000,
          },
          {
            date: "2021-06-02",
            info: "เติมเกมส์",
            type: "Expense",
            amount: 1000,
          },
          {
            date: "2021-06-05",
            info: "ซื้อเสื้อ",
            type: "Expense",
            amount: 300,
          },
          {
            date: "2021-06-22",
            info: "ซื้อ BTC",
            type: "Expense",
            amount: 1500,
          },
          
          {
            date: "2021-06-30",
            info: "ค่า netflix",
            type: "Expense",
            amount: 420,
          }, 
          {
            date: "2021-07-01",
            info: "ค่าขนม",
            type: "Income",
            amount: 5000,
          },
          {
            date: "2021-07-01",
            info: "ลงทุน",
            type: "Expense",
            amount: 1000,
          },
          {
            date: "2021-07-02",
            info: "เติมเกมส์",
            type: "Expense",
            amount: 1000,
          },
          {
            date: "2021-07-05",
            info: "ซื้อเกมส์",
            type: "Expense",
            amount: 325,
          },
          {
            date: "2021-07-18",
            info: "สั่งขนม",
            type: "Expense",
            amount: 450,
          },
          
        ],
      };
      commit("fetch", { res });
    },

    addRecord({ commit }, payload) {
      commit("add", { payload });
    },
  },

  modules: {},
});
