<template>
  <ul v-if="todos.length">
    <li v-for="(todo, i) in todos" :key="i">
      {{ todo.text }}
      <!-- TODO: Use Vuex action that calls a mutation -->
      <button @click="$emit('remove', todo.id)">
        X
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
    }),
  },
};
</script>
