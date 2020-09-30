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
  REMOVE_TODO: (state, id) => {
    state.todos = state.todos.filter((todo) => {
      return todo.id !== id;
    });
  },
};

const actions = {
  removeTodo: ({ commit }, id) => {
    commit("REMOVE_TODO", id);
  },
  addTodo: ({ commit }, txt) => {
    let maxId = Math.max((maxId = state.todos.map((t) => t.id)));
    state.todos.push({ id: maxId + 1, text: txt });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
