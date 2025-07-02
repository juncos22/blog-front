<template>
  <form @submit.prevent="() => emit('submit', userForm)">
    <h2>Iniciar Sesión</h2>

    <label for="email">Correo electrónico</label>
    <input
      type="email"
      id="email"
      placeholder="tucorreo@ejemplo.com"
      v-model="userForm.email"
      required
    />

    <label for="password">Contraseña</label>
    <input
      type="password"
      id="password"
      v-model="userForm.password"
      placeholder="********"
      required
    />

    <button type="submit">Entrar</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { UserCredentials } from "@/models/user";

const userForm = ref<UserCredentials>({ email: "", password: "" });
const emit = defineEmits<{
  submit: [value: UserCredentials];
}>();
</script>

<style scoped>
/* ---------- FORMS ---------- */
form {
  background: #fff;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  max-width: 450px;
  margin: 2rem auto;
}
form h2 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--clr-primary-dark);
}
label {
  display: block;
  margin-bottom: 0.35rem;
  font-weight: 600;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.65rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  transition: border-color 0.25s;
}
input:focus {
  border-color: var(--clr-primary);
  outline: none;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: var(--clr-accent);
  border: none;
  color: #fff;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background 0.25s;
}
button:hover {
  background: #ea580c;
}
</style>
