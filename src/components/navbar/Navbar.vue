<template>
  <div class="navbar">
    <vs-navbar color="dark" fixed text-white v-model="active">
      <template #left>
        <img class="navbar__img" src="@/assets/logo.png" />
      </template>
      <vs-navbar-item class="navbar__item" :active="active == 'Home'" id="Home">
        Inicio
      </vs-navbar-item>
      <vs-navbar-item
        class="navbar__item"
        :active="active == 'Films'"
        id="Films"
      >
        Películas
      </vs-navbar-item>
      <vs-navbar-item
        class="navbar__item"
        :active="active == 'Series'"
        id="Series"
      >
        Series
      </vs-navbar-item>
      <template #right>
        <vs-navbar-group class="navbar__language">
          <span class="material-icons navbar__language__icon"> public </span>
          <span>Language</span>
          <template #items>
            <vs-navbar-item> English </vs-navbar-item>
            <vs-navbar-item> Spanish </vs-navbar-item>
          </template>
        </vs-navbar-group>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Navbar",
  components: {},
})
export default class Navbar extends Vue {
  active = "Home";
  value = "1";
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
    font-size: 15px;
  }
  &__img {
    height: 22px;
  }

  &__language {
    ::v-deep .vs-navbar__group__item {
      font-size: 15px;
      display: flex;
      align-items: center;
    }
    ::v-deep .vs-navbar__group__items {
      min-width: auto;
      left: 29px;
    }

    &__icon {
      margin: 0px 2px 0px 2px;
    }
  }
}
</style>
