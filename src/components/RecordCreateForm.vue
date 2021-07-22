<template>
  <div>
      {{ setState() }}
      <h3>Add {{ form.type }}</h3>
      <div class="form">
          <div>
              <label for="date">Date : </label>
              <input type="date" v-model="form.date">
              <p v-if="isValid.date === false" >This cell is required</p>
          </div>
          <div>
              <label for="info">Info : </label>
              <input type="text" v-model="form.info" >
              <p v-if="isValid.info === false" >This cell is required</p>
          </div>
          <div>
              <label for="amount">Amount : </label>
              <input type="text" v-model.number="form.amount" >
              <p v-if="isValid.amount.value === false" >Your amount should be more than 0</p>
              <p v-if="isValid.amount.isNum === false" >Your amount should be number</p>
              
          </div>
      </div>
      <button v-on:click="add">Add</button>
      <button v-on:click="cancel">Cancel</button>
  </div>
</template>

<script>

export default {
    data(){
        return {
            form: {
                date: "",
                info: "",
                amount: 0,
                type: ""

            },
            isValid: {
                date: true,
                info: true,
                amount: {
                    value : true,
                    isNum : true
                }
            }

        }
    },
    props: {
       state: Number
    },
    methods: {
        print(something) {
            console.log(something)
        },
        setState() {
            if(this.state === 1)
                this.form.type = "Income"
            if(this.state === 2)
                this.form.type = "Expense"
        },
        cancel() {
            this.$emit('update', 0)
        },
        add() {
            this.checkDate()
            this.checkInfo()
            this.checkAmount()
            this.print(this.form.date)
            this.print(this.form.info)
            this.print(this.form.type)
            this.print(this.form.amount)
            
        },
        checkDate() {
            if(this.form.date === "")
                this.isValid.date = false
            else{
                this.isValid.date = true
            }
        },
        checkInfo() {
            if(this.form.info === "")
                this.isValid.info = false
            else{
                this.isValid.info = true
            }
        },
        checkAmount() {
            
            if(this.form.amount <= 0)
                this.isValid.amount.value = false
            else{
                this.isValid.amount.value = true
            }
            if(Number.isInteger(this.form.amount))
                this.isValid.amount.isNum = true
            else{
                this.isValid.amount.isNum = false
            }
        }
        
    }
   
}
</script>

<style>
    p {
        margin: 0;
        color: red;
        font-size: .8em;
    }
</style>