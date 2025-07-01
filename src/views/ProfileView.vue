<template>
  <section class="profile-header">
    <img src="https://i.pravatar.cc/200?img=12" alt="Foto de perfil" />
    <div class="profile-details">
      <h1>Juan Pérez</h1>
      <p>Desarrollador Full‑Stack · Buenos Aires, AR</p>
    </div>
  </section>

  <h2 style="margin-top: 2rem">Mis publicaciones</h2>
  <div class="card-grid">
    <article class="card">
      <img src="https://picsum.photos/600/400?random=12" alt="Imagen entrada" />
      <div class="card-content">
        <h3>Mi primer post</h3>
        <p>Lorem ipsum dolor sit amet consectetur...</p>
      </div>
    </article>
    <!-- Más tarjetas -->
  </div>
</template>

<script setup>
import { ref } from "vue";
const title = ref("My Page");
</script>

<style scoped>
/* ---------- PERFIL ---------- */
.profile-header {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.profile-header img {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow);
}
.profile-details h1 {
  color: var(--clr-primary-dark);
}
.profile-details p {
  margin-top: 0.25rem;
  opacity: 0.9;
}

@media (max-width: 600px) {
  nav ul {
    flex-direction: column;
    gap: 0.75rem;
  }
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>
