<template>
  <div class="Home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Income and Expense</h1>
    <div btn-wrap v-if="state === 0">
      <button v-on:click="addIncome">Add Income</button>
      <button v-on:click="addExpense">Add Expense</button>
    </div>
    <record-create-form v-if="state !== 0" :state="state" @update="disappear" />
    <income-expense  :totalList="totalList=[]" :records="records"/>
    
    <graph/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import IncomeExpense from "../components/IncomeExpenseTable.vue";
import RecordCreateForm from "../components/RecordCreateForm.vue";
import Graph from "../components/Graph.vue";
import RecordStore from "@/store/record";

export default {
  name: "Home",
  components: {
    IncomeExpense,
    RecordCreateForm,
    Graph,
  },
  data() {
    return {
      state: 0,
      totalList: [],
      records: [],

    };
  },
  created() {
    
    this.fetchRecord();
  },
  
  methods: {
    fetchRecord() {
      RecordStore.dispatch("fetchRecord");
      this.records = RecordStore.getters.records;
    },
    addIncome() {
      this.state = 1;
    },
    addExpense() {
      this.state = 2;
    },
    disappear(state) {
      this.state = state;
      //this.forceRerender()
    },
    // forceRerender() {
    //   this.renderComponent = false;

    //   this.$nextTick(() => {
          
    //       this.renderComponent = true;
    //     });
    // }
  },
};
</script>
<style scoped></style>
