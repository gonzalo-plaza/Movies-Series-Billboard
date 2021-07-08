import { Actions } from "vuex-smart-module";
import MainMutations from "./MainMutations";
import MainGetters from "./MainGetters";
import MainState from "./MainState";

export default class MainActions extends Actions<
  MainState,
  MainGetters,
  MainMutations,
  MainActions
> {
  public changeLanguajeToSpanish(): void {
    this.commit("changeLanguajeToSpanish", null);
  }

  public changeLanguajeToEnglish(): void {
    this.commit("changeLanguajeToEnglish", null);
  }
}
