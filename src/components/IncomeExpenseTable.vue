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
          <td>{{computeTotal[index]}}</td>
        </tr>
      </tbody>
    </table>
    <div class="total">
      <h3>Remaining : {{computeTotal[computeTotal.length-1]}}</h3>
      
    </div>
  </div>
</template>

<script>
import RecordStore from '@/store/record'
export default {
  name: "IncomeExpenseTable",
  data() {
    return {
      records:[],
      total: 0
    }
  },
  created() {
    this.fetchRecord()
  },
  methods: {
    fetchRecord() {
      RecordStore.dispatch('fetchRecord')
      this.records = RecordStore.getters.records
    }
  },
  computed: {
    computeTotal() {
      return this.records.map((record) => {
        if(record.type === 'income')
          return this.total += parseInt(record.amount)
        if(record.type === 'expense')
          return this.total -= parseInt(record.amount)
        // console.log(this.total);
      })
    }
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
