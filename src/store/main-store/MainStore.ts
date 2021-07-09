import { Module } from "vuex-smart-module";

import MainState from "./MainState";
import MainActions from "./MainActions";
import MainMutations from "./MainMutations";
import MainGetters from "./MainGetters";

const mainStore = new Module({
  state: MainState,
  actions: MainActions,
  mutations: MainMutations,
  getters: MainGetters,
});

export default mainStore;
