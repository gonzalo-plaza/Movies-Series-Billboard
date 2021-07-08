<template>
  <div id="app">
    <navbar />
    <img class="test-img" src="@/assets/img/imagen-test.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Navbar from "@/components/navbar/Navbar.vue";

@Component({
  name: "App",
  components: { Navbar },
})
export default class App extends Vue {}
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
