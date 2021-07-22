<template>
  <div class="Home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Income and Expense</h1>
    <div class="btn-wrap" v-if="state === 0">
      <button v-on:click="addIncome">Add Income</button>
      <button v-on:click="addExpense">Add Expense</button>
    </div>
    <div class="chart-wrap">
      <button v-if="state === 0 && !chartDisplay" v-on:click="showChart">Chart</button>
      <chart v-if="state === 0 && chartDisplay" :chartData="calChartData()"/>
      <button v-if="state === 0 && chartDisplay" v-on:click="showChart">Back</button>
    </div>
    <record-create-form v-if="state !== 0" :state="state" @update="disappear" />
    <income-expense  :totalList="totalList=[]" :records="records"/>
  </div>
</template>

<script>
// @ is an alias to /src
import IncomeExpense from "../components/IncomeExpenseTable.vue";
import RecordCreateForm from "../components/RecordCreateForm.vue";
import Chart from "../components/Chart.vue";
import RecordStore from "@/store/record";

export default {
  name: "Home",
  components: {
    IncomeExpense,
    RecordCreateForm,
    Chart,
  },
  data() {
    return {
      state: 0,
      totalList: [],
      records: [],
      chartDisplay: false,
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
    },
    showChart() {
      this.chartDisplay = !this.chartDisplay
    },
    calChartData() {
      var chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      // total remain in that month
      this.records.map(record => {
        if(record.date.slice(0, 4) === "2021"){
          // console.log(parseInt(record.date.slice(5, -3)));
          let index = parseInt(record.date.slice(5, -3)) - 1
          if(record.type === "Income")
            chartData[index] += record.amount 
          if(record.type === "Expense")
            chartData[index] -= record.amount
        }
      })
      return chartData;
    }
    
  },
};
</script>
<style scoped></style>
