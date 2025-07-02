<template>
  <span
    :class="{
      alert: true,
      error: props.type === 'error',
      success: props.type === 'success',
    }"
  >
    {{ props.message }}
  </span>
</template>

<script setup lang="ts">
type Props = {
  type: "error" | "success";
  message: string;
};
const props = defineProps<Props>();
</script>

<style scoped>
.alert {
  width: 30%;
  padding-inline: 10rem;
  padding-block: 0.5rem;
  border-radius: 8rem;
  color: rgb(27, 27, 27);
}
.error {
  background-color: rgb(252, 55, 55);
}
.success {
  background-color: rgb(7, 134, 17);
}
</style>
