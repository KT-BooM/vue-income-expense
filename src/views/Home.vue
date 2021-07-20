<template>
  
  <div class="Home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Income and Expense</h1>
    <income-expense />
    <div id="nav">
      <router-link to="/graph">Graph</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IncomeExpense from '../components/IncomeExpenseTable.vue';

export default {
  name: "Home",
  components: {
    IncomeExpense
  },
};
</script>
<style scoped>

</style>