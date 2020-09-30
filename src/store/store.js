import Vue from "vue";
import Vuex from "vuex";
import todo from "./modules/todo";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: { todo },
});
