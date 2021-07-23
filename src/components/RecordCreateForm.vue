<template>
  <div>
    <h3>Add {{ form.type }}</h3>
    <div class="form">
      <div class="date-wrap">
        <label class="date-lb" for="date">Date : </label>
        <input class="date-in" type="date" v-model="form.date" />
        <p class="error-msg" v-if="checkDate() === false">Date is required</p>
      </div>
      <div class="info-wrap">
        <label class="info-lb" for="info">Info : </label>
        <input class="info-in" type="text" v-model="form.info" />
        <p class="error-msg" v-if="checkInfo() === false">
          This cell is required
        </p>
      </div>
      <div class="amount-wrap">
        <label class="amount-lb" for="amount">Amount : </label>
        <input class="amount-in" type="text" v-model.number="form.amount" />
        <p
          class="error-msg"
          v-if="checkAmountIsNum() === false && checkAmountValue() === true"
        >
          Your amount should be number
        </p>
        <p class="error-msg" v-if="checkAmountValue() === false">
          Your amount should be more than 0
        </p>
      </div>
      <div class="btn-wrap">
        <button class="add-btn" v-on:click="add">Add</button>
        <button class="cancel-btn" v-on:click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import RecordStore from "@/store/record";

export default {
  data() {
    return {
      form: {
        date: "2021-07-22",
        info: this.state === 1 ? "ได้เงิน..." : "จ่ายค่า...",
        amount: 10,
        type: this.state === 1 ? "Income" : "Expense",
      },
      isValid: {
        date: true,
        info: true,
        amount: {
          value: true,
          isNum: true,
        },
        all: false,
      },
    };
  },
  props: {
    state: Number,
  },
  methods: {
    print(something) {
      console.log(something);
    },

    cancel() {
      this.$emit("update", 0);
    },
    add() {
      // this.print(this.form.date)
      // this.print(this.form.info)
      // this.print(this.form.type)
      // this.print(this.form.amount)
      // this.print(this.checkAmountValue())
      if (this.checkAll()) {
        let payload = {
          date: this.form.date,
          info: this.form.info,
          type: this.form.type,
          amount: this.form.amount,
        };

        RecordStore.dispatch("addRecord", payload);
        this.cancel();
      }
    },
    checkAll() {
      if (
        this.checkDate() &&
        this.checkInfo() &&
        this.checkAmountValue() &&
        this.checkAmountIsNum()
      )
        return true;
      else return false;
    },
    checkDate() {
      if (this.form.date === "") return false;
      else {
        return true;
      }
    },
    checkInfo() {
      if (this.form.info === "") return false;
      else {
        return true;
      }
    },
    checkAmountValue() {
      if (this.form.amount <= 0) return false;
      else {
        return true;
      }
    },
    checkAmountIsNum() {
      if (!isNaN(this.form.amount)) return true;
      else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 350px;
  margin: 0 auto;
  label {
    margin-left: 3em;
  }
  .date-in {
    width: 165px;
    margin-left: 1.6em;
  }
  .info-in {
    margin-left: 2.14em;
  }
}

.btn-wrap {
  margin-top: 0.5em;
  display: flex;
  justify-content: space-evenly;
  button {
    color: white;
    width: 70px;
    &:hover {
      color: black;
    }
  }
  .add-btn {
    background-color: hsl(228, 79%, 48%);
    &:hover {
      background-color: hsl(177, 79%, 83%);
    }
  }
  .cancel-btn {
    background-color: hsl(0, 75%, 57%);
    &:hover {
      color: yellow;
      background-color: hsl(0, 100%, 50%);
    }
  }
}
.error-msg {
  margin: 0 0 0 9em;
  color: red;
  font-size: 0.8em;
}
</style>
