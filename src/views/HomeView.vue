<script setup lang="ts"></script>

<template>
  <h1>Pagina principal</h1>
  <h1>Últimas entradas</h1>
  <section class="card-grid">
    <!-- Ejemplo de tarjeta -->
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

    <article class="card">
      <img src="https://picsum.photos/600/400?random=2" alt="Imagen entrada" />
      <div class="card-content">
        <h3>Otra gran entrada</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.
        </p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.card-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
card {
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
