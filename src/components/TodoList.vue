<template>
  <div>
    test test
    <!-- TODO: no longer needs v-model -->
    <!-- TODO: remove @keydown and handle the 'addToDo' logic in BaseInputText component -->
    <BaseInputText />

    <ul v-if="todos.length">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
    <p v-else>
      Nothing left in the list. Add a new todo in the input above.
    </p>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText.vue";
import TodoListItem from "./TodoListItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
    }),
  },
  components: {
    BaseInputText,
    TodoListItem,
  },
  methods: {
    ...mapActions,
  },
  // move all methods into Vuex action
  // there shouldn't be any methods here because we're moving the logic into the component
};
</script>
