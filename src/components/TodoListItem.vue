<template>
  <li>
    {{ todo.text }}
    <!-- TODO: Use Vuex action that calls a mutation -->
    <button @click="$emit('remove', todo.id)">
      X
    </button>
  </li>
</template>

<script>
export default {
  // TODO: Use Vuex state
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
