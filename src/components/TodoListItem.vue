<template>
  <ul v-if="todos.length">
    <li v-for="(todo, i) in todos" :key="i">
      {{ todo.id }}: {{ todo.text }}
      <button @click="remove(todo.id)">
        X
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
    }),
  },
  methods: {
    ...mapActions({
      remove: "todo/removeTodo",
    }),
  },
};
</script>
