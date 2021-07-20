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
          <td>{{index+1}}</td>
          <td>{{record.date}}</td>
          <td>{{record.info}}</td>
          <td>{{record.type}}</td>
          <td>{{record.amount}}</td>
          <td>{{record.total}}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import RecordStore from '@/store/record'
export default {
  name: "IncomeExpenseTable",
  data() {
    return {
      records:[],
    }
  },
  created() {
    this.fetchRecord()
  },
  methods: {
    fetchRecord() {
      RecordStore.dispatch('fetchRecord')
      this.records = RecordStore.getters.records

    },
    
    
    

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
