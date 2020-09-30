<template>
  <div>
    <BaseInputText />
    <TodoListItem />
    <p v-if="!todos.length">
      Nothing left in the list. Add a new todo in the input above.
    </p>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText.vue";
import TodoListItem from "./TodoListItem.vue";

import { mapState } from "vuex";

export default {
  components: {
    BaseInputText,
    TodoListItem,
  },
  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
    }),
  },
  methods: {},
};
</script>
