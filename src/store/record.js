import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

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
      state.data = res.data
    },
    add(state, { payload }) {
      state.data.push(payload)
    },
    edit(state, { payload }) {
      state.data[payload.index].name = payload.name
      state.data[payload.index].type = payload.type
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
                date: "20/07/2021",
                info: "ค่าจ้าง",
                type: "income",
                amount: 200,
                total: 200
              },
              {
                date: "20/07/2021",
                info: "กินข้าว",
                type: "expense",
                amount: 100,
                total: 100
              },
            ],
          }
          commit('fetch', { res })
        },
    

    addRecord({ commit }, payload) {
      
      commit("add", { payload })
    }

   }, 
  
  modules: {},
})