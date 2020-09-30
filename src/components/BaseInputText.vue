<template>
  <!--
  <input
    type="text"
    class="input"
    v-model="value"
    @keydown.enter="add(value)"
  />
  -->

  <input
    type="text"
    class="input"
    v-model="value"
    @keydown.enter="addNewTodo"
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      add: "todo/addTodo",
    }),
    addNewTodo() {
      // this.add(this.value);
      this.$store.dispatch("todo/addTodo", this.value);
      this.value = "";
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
