<template>
  <div>
      
      <h3>Add {{ form.type }}</h3>
      <div class="form">
          <div>
              <label for="date">Date : </label>
              <input type="date" v-model="form.date">
              <p v-if="checkDate() === false" >Date is required</p>
          </div>
          <div>
              <label for="info">Info : </label>
              <input type="text" v-model="form.info" >
              <p v-if="checkInfo() === false" >This cell is required</p>
          </div>
          <div>
              <label for="amount">Amount : </label>
              <input type="text" v-model.number="form.amount" >
              <p v-if="checkAmountIsNum() === false && checkAmountValue() === true" >Your amount should be number</p>
              <p v-if="checkAmountValue() === false" >Your amount should be more than 0</p>
              
          </div>
      </div>
      <button v-on:click="add">Add</button>
      <button v-on:click="cancel">Cancel</button>
  </div>
</template>

<script>
import RecordStore from "@/store/record";

export default {
    data(){
        return {
            form: {
                date: "2021-07-22",
                info: this.state === 1 ? "ได้เงิน..." : "จ่ายค่า...",
                amount: 10,
                type: this.state === 1 ? "Income" : "Expense"
            },
            isValid: {
                date: true,
                info: true,
                amount: {
                    value : true,
                    isNum : true
                },
                all: false
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
        
        cancel() {
            this.$emit('update', 0)
        },
        add() {
            // this.print(this.form.date)
            // this.print(this.form.info)
            // this.print(this.form.type)
            // this.print(this.form.amount)
            // this.print(this.checkAmountValue())
            if(this.checkAll()) {
                let payload = {
                    date: this.form.date,
                    info: this.form.info,
                    type: this.form.type,
                    amount: this.form.amount,
                }
                
                RecordStore.dispatch("addRecord", payload)
                this.cancel()
            }
            
            
        },
        checkAll() {
            if(this.checkDate() && this.checkInfo() 
            && this.checkAmountValue() && this.checkAmountIsNum())
                return true
            else
                return false
        },
        checkDate() {
            if(this.form.date === "")
                return false
            else{
                return true
            }
        },
        checkInfo() {
            if(this.form.info === "")
                return false
            else{
                return true
            }
        },
        checkAmountValue() {
            
            if(this.form.amount <= 0)
                return false
            else{
                return true
            }
            
        },
        checkAmountIsNum() {
            if(!isNaN(this.form.amount))
                return true
            else{
                return false
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