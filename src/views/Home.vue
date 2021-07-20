<template>
  
  <div class="Home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Income and Expense</h1>
    <div btn-wrap v-if="state===0" >
      <button v-on:click="addIncome">Add Income</button>
      <button v-on:click="addExpense">Add Expense</button>
    </div>
    <record-create-form v-if="state !== 0" :state="state" @update="disappear"/>
    <income-expense />
    <div id="nav">
      <router-link to="/graph">Graph</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IncomeExpense from '../components/IncomeExpenseTable.vue';
import RecordCreateForm from '../components/RecordCreateForm.vue';


export default {
  name: "Home",
  components: {
    IncomeExpense,
    RecordCreateForm
  },
  data() {
    return {
      state: 0
    }
  },
  methods: {
    addIncome() {
      this.state = 1;
    },
    addExpense() {
      this.state = 2;
    },
    disappear(state){
      this.state = state
    }
  }
};

</script>
<style scoped>

</style>