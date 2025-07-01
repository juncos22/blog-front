<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- NAV -->
  <nav>
    <div class="nav-container container">
      <RouterLink to="/" class="logo">Blog del Informático</RouterLink>
      <ul>
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/login">Iniciar Sesión</RouterLink></li>
        <li><RouterLink to="/register">Registrarme</RouterLink></li>
        <li>
          <RouterLink aria-current="page" to="/profile">Perfil</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="css" scoped>
/* ---------- NAV ---------- */
nav {
  background: var(--clr-primary);
  padding: 0.8rem 0;
  box-shadow: var(--shadow);
}
nav .nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a.logo {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1.25rem;
}
nav a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.25s;
}
nav a:hover,
nav a[aria-current="page"] {
  color: #fff;
}
</style>
