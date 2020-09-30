const state = {
  todos: [
    {
      id: 1,
      text: "Learn Vue",
    },
    {
      id: 2,
      text: "Learn about single-file components",
    },
    {
      id: 3,
      text: "Fall in love",
    },
  ],
};

const getters = {};

const mutations = {
  ADD_TODO: (state, val) => {
    state.todos.push({
      id: state.todos[state.todos.length - 1].id + 1,
      text: val,
    });
  },
  REMOVE_TODO: (state, id) => {
    state.todos = state.todos.filter((todo) => {
      return todo.id !== id;
    });
  },
};

const actions = {
  addTodo: ({ commit }, txt) => {
    const trimmedText = txt.trim();
    if (trimmedText) {
      commit("ADD_TODO", trimmedText);
    }
  },
  removeTodo: ({ commit }, idToRemove) => {
    commit("REMOVE_TODO", idToRemove);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
