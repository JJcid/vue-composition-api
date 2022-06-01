<template>
  <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <a class="navbar-item is-size-4 is-family-monospace"> Noteballs </a>

        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-end">
          <router-link to="/" active-class="is-active" class="navbar-item">
            Notes
          </router-link>
          <router-link to="stats" active-class="is-active" class="navbar-item">
            Stats
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/*
  Mobile nav 
*/

import { ref } from "vue";

const showMobileNav = ref(false);
</script>

<style>
@media (max-width: 1023) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
