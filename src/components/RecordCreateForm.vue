<template>
  <div>
    {{ setState() }}
    <h3>Add {{ type }}</h3>
    <button v-on:click="cancel">Cancel</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
    };
  },
  props: {
    state: Number,
  },
  methods: {
    print(something) {
      console.log(something);
    },
    setState() {
      if (this.state === 1) this.type = "Income";
      if (this.state === 2) this.type = "Expense";
    },
    cancel() {
      this.$emit("update", 0);
    },
  },
};
</script>

<style></style>
