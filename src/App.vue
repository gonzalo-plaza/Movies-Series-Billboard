<template>
  <div id="app">
    <navbar />
    <img class="test-img" src="@/assets/img/imagen-test.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import mainStore from "@/store/main-store/MainStore";

import Navbar from "@/components/navbar/Navbar.vue";

@Component({
  name: "App",
  components: { Navbar },
})
export default class App extends Vue {
  private mainStore = mainStore.context(this.$store);

  private get currentLanguage(): string {
    return this.mainStore.state.currentLanguage;
  }

  @Watch("currentLanguage")
  private onChangeLanguage(): void {
    this.$i18n.locale = this.currentLanguage;
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Cabin", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.test-img {
  width: 100%;
}
</style>
