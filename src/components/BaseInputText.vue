<template>
  <input type="text" class="input" v-model="value" />
</template>

<script>
export default {
  // TODO: replace with a data
  data() {
    return {
      value: "",
    };
  },
  computed: {
    // TODO: delete this and add a method that calls Vuex action 'addTodo'
    listeners() {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #32485f;
}
</style>
