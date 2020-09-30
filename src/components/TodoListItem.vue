<template>
  <li>
    {{ todo.text }}
    <!-- TODO: Use Vuex action that calls a mutation -->
    <button @click="removeTodo(todo.id)">
      X
    </button>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // TODO: Use Vuex state
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("todo", [
      "removeTodo", // -> this.foo()
    ]),
  },
};
</script>
