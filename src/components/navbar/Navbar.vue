<template>
  <div class="navbar">
    <vs-navbar color="dark" fixed text-white v-model="active">
      <template #left>
        <img class="navbar__img" src="@/assets/logo.png" />
      </template>
      <vs-navbar-item class="navbar__item" :active="active == 'Home'" id="Home">
        {{ $t("components.navbar.home") }}
      </vs-navbar-item>
      <vs-navbar-item
        class="navbar__item"
        :active="active == 'Films'"
        id="Films"
      >
        {{ $t("components.navbar.films") }}
      </vs-navbar-item>
      <vs-navbar-item
        class="navbar__item"
        :active="active == 'Series'"
        id="Series"
      >
        {{ $t("components.navbar.series") }}
      </vs-navbar-item>
      <template #right>
        <vs-navbar-group class="navbar__language">
          <span class="material-icons navbar__language__icon"> public </span>
          <span>{{ $t("components.navbar.languageTitle") }}</span>
          <template #items>
            <vs-navbar-item
              v-if="currentLanguage == 'es'"
              @click="changeLanguageToEnglish"
            >
              {{ $t("components.navbar.english") }}
            </vs-navbar-item>
            <vs-navbar-item
              v-if="currentLanguage == 'en'"
              @click="changeLanguageToSpanish"
            >
              {{ $t("components.navbar.spanish") }}
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
      </template>
    </vs-navbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import mainStore from "@/store/main-store/MainStore";

@Component({
  name: "Navbar",
  components: {},
})
export default class Navbar extends Vue {
  active = "Home";
  value = "1";

  private mainStore = mainStore.context(this.$store);

  private get currentLanguage(): string {
    return this.mainStore.state.currentLanguage;
  }

  private changeLanguage(): void {
    this.mainStore.state.currentLanguage == "es"
      ? (this.mainStore.state.currentLanguage = "en")
      : (this.mainStore.state.currentLanguage = "es");
  }

  private changeLanguageToSpanish(): void {
    this.mainStore.state.currentLanguage = "es";
  }

  private changeLanguageToEnglish(): void {
    this.mainStore.state.currentLanguage = "en";
  }
}
</script>

<style scoped lang="scss">
.navbar {
  opacity: 0.3;
  transition: opacity 500ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &__item {
    font-size: 0.938rem;
  }
  &__img {
    height: 1.375rem;
  }

  &__language {
    ::v-deep .vs-navbar__group__item {
      font-size: 0.938rem;
      display: flex;
      align-items: center;
    }
    ::v-deep .vs-navbar__group__items {
      min-width: auto;
      left: 1.5rem;
    }

    &__icon {
      margin: 0rem 0.125rem 0rem 0.125rem;
    }
  }
}
</style>
