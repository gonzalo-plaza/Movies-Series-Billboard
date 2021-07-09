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
  public changeLanguageToSpanish(): void {
    this.commit("changeLanguageToSpanish", null);
  }

  public changeLanguageToEnglish(): void {
    this.commit("changeLanguageToEnglish", null);
  }
}
