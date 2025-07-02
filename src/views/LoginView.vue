<script setup lang="ts">
import Alert from "@/components/Alert.vue";
import Loader from "@/components/Loader.vue";
import LoginForm from "@/components/LoginForm.vue";
import type { UserCredentials } from "@/models/user";
import { useAuthStore } from "@/stores/auth.store";

const authStore = useAuthStore();

function login(form: UserCredentials) {
  // console.log("User Credentials:", form);
  authStore.login(form);
}
</script>

<template>
  <div>
    <LoginForm @submit="login" />
  </div>
  <div style="margin-inline: 8rem; width: fit-content">
    <Alert
      v-if="authStore.message && authStore.success !== undefined"
      :message="authStore.message"
      :type="authStore.success ? 'success' : 'error'"
    />
    <Loader v-if="authStore.loading" message="Cargando" />
  </div>
</template>
