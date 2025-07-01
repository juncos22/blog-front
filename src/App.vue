<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <Navigation />
  </header>

  <RouterView />
</template>

<style scoped></style>
