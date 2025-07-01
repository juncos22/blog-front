<template>
  <div>
    <h1>Iniciar sesión</h1>
    <p>Ingrese su correo electrónico y contraseña para acceder a su cuenta.</p>

    <input
      type="email"
      required
      name="email"
      v-model="userForm.email"
      placeholder="Ingrese su correo
    electrónico"
    />
    <input
      type="password"
      required
      name="password"
      v-model="userForm.password"
      placeholder="Ingrese su contraseña"
    />

    <button
      @click="
        () => {
          console.log(userForm);
        }
      "
    >
      Ingresar
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userForm = ref({ email: "", password: "" });
</script>

<style scoped>
/* Your styles here */
</style>
