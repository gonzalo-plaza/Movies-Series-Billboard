import { Mutations } from "vuex-smart-module";
import MainState from "./MainState";

export default class MainMutations extends Mutations<MainState> {
  public changeLanguajeToSpanish(): void {
    this.state.currentLanguaje = "es";
  }

  public changeLanguajeToEnglish(): void {
    this.state.currentLanguaje = "en";
  }
}
