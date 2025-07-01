<template>
  <div>
    <h1>Login page</h1>
    <LoginForm />
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginForm from "@/components/LoginForm.vue";
const title = ref("My Page");
</script>
