<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <Navigation />
  </header>

  <!-- CONTENT -->
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped></style>
