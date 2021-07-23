<template>
  <div class="Home">
    <h1>Income and Expense</h1>
    <div class="btn-wrap" v-if="state === 0 && !chartDisplay">
      <button class="income-btn" v-on:click="addIncome">Add Income</button>
      <button class="expense-btn" v-on:click="addExpense">Add Expense</button>
    </div>
    <div class="chart-wrap">
      <button
        class="chart-btn"
        v-if="state === 0 && !chartDisplay"
        v-on:click="showChart"
      >
        Chart of 2021
      </button>
      <chart v-if="state === 0 && chartDisplay" :chartData="calChartData()" />
      <button
        class="back-btn"
        v-if="state === 0 && chartDisplay"
        v-on:click="showChart"
      >
        Back
      </button>
    </div>
    <record-create-form v-if="state !== 0" :state="state" @update="disappear" />
    <income-expense
      v-if="!chartDisplay"
      :totalList="(totalList = [])"
      :records="records"
    />
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
    async fetchRecord() {
      await RecordStore.dispatch("fetchRecord");
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
      this.chartDisplay = !this.chartDisplay;
    },
    calChartData() {
      var chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      // total remain in that month
      this.records.map((record) => {
        if (record.date.slice(0, 4) === "2021") {
          // console.log(parseInt(record.date.slice(5, -3)));
          let index = parseInt(record.date.slice(5, -3)) - 1;
          if (record.type === "Income") chartData[index] += record.amount;
          if (record.type === "Expense") chartData[index] -= record.amount;
        }
      });
      return chartData;
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  color: white;
  &:hover {
    color: black;
  }
}
.btn-wrap {
  display: flex;
  justify-content: space-evenly;
  width: 500px;
  margin: 1em auto;
  .income-btn {
    background-color: hsl(228, 79%, 48%);
    &:hover {
      background-color: hsl(177, 79%, 83%);
    }
  }
  .expense-btn {
    background-color: hsl(0, 75%, 57%);
    &:hover {
      color: yellow;
      background-color: hsl(0, 100%, 50%);
    }
  }
}
.chart-btn,
.back-btn {
  background-color: hsla(93, 79%, 27%, 0.678);
  &:hover {
    background-color: hsla(93, 100%, 51%, 0.863);
  }
}
.back-btn {
  width: 60px;
}
</style>
