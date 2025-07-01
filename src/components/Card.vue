<template>
  <article class="card">
    <img src="https://picsum.photos/600/400?random=1" alt="Imagen entrada" />
    <div class="card-content">
      <h3>Título de la entrada</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
        numquam.
      </p>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";

const data = ref(null);
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s;
}
.card:hover {
  transform: translateY(-4px);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.card-content {
  padding: 1.25rem;
  flex: 1;
}
.card-content h3 {
  margin-bottom: 0.5rem;
  color: var(--clr-primary-dark);
}
.card-content p {
  font-size: 0.95rem;
  opacity: 0.9;
}
</style>
