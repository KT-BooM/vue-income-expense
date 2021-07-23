<template>
  <div class="main-container">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Info</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in records" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ record.date }}</td>
          <td>{{ record.info }}</td>
          <td>{{ record.type }}</td>
          <td>{{ record.amount }}</td>
          <td>{{ totalList[index] }}</td>
        </tr>
      </tbody>
    </table>
    <div class="total">
      <h3>Remaining : {{ computeTotal }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncomeExpenseTable",

  props: {
    totalList: [],
    records: [],
  },

  computed: {
    computeTotal() {
      var total = 0;
      this.records.forEach((curr) => {
        if (curr.type === "Income") {
          total += parseFloat(curr.amount);
        }
        if (curr.type === "Expense") {
          total -= parseFloat(curr.amount);
        }
        this.totalList.push(total);
      });

      return total;
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  width: 90%;
  margin: 1rem auto;
}
</style>
