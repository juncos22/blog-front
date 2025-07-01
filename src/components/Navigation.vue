<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navigation">
    <div>Blog del Informático</div>
    <ul>
      <li>
        <RouterLink to="/" className="hover:underline"> Inicio </RouterLink>
      </li>
      <li>
        <RouterLink to="/login" className="hover:underline">
          Iniciar sesión
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
}
</style>
