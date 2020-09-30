<template>
  <input
    type="text"
    class="input"
    :value="value"
    @keyup.enter="addTodo($event.target.value)"
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  // TODO: replace with a data
  data: function() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapActions("todo", [
      "addTodo", // -> this.foo()
    ]),
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
