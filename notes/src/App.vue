<template>
  <nav-bar />
  <div class="container is-max-desktop px-2 py-4">
    <router-view />
  </div>
</template>

<script setup>
/**
 * Components
 */
import NavBar from "./components/Layout/NavBar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
