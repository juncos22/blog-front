<template>
  <span
    :class="{
      alert: true,
      error: props.type === 'error',
      success: props.type === 'success',
    }"
  >
    {props.message}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ type: "error" | "success"; message: string }>();
</script>

<style scoped>
.alert {
  width: 80%;
  margin-inline: auto;
  color: rgb(27, 27, 27);
}
.error {
  background-color: rgb(252, 55, 55);
}
.success {
  background-color: rgb(7, 134, 17);
}
</style>
