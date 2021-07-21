<template>
  <div class="hero">
    <section
      class="hero-container-main container"
    >
      <div class="hero-description">
        <h1>Bienvenido a la Mesa de Ayuda en Linea UTP</h1>
        <p>Una nueva Mesa de Aydua ❤</p>
      </div>
      <div class="quick-links">
        <div class="card-links">
          <div class="card-head">Soluciones Rápidas</div>
          <div class="card-content">
            <p>Cambiar Contraseña </p>
          </div>
          <div class="card-content">
            <p>Como añadir una foto de perfil</p>
          </div>
          <div class="card-content">
            <p>Crear cuenta</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "MainBienvenidos",
};
</script>

<style>
.hero {
  background-image: linear-gradient(
    to right top,
    #b50d30,
    #87122d,
    #5a1325,
    #301119,
    #000000
  );
}

.hero-container-main {
  height: 88vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.hero-container-main .hero-description {
  color: #fff;
  width: 50%;
}

.hero-container-main .hero-description h1 {
  font-size: 5rem;
  font-weight: 900;
}

.hero-container-main .hero-description p {
  font-size: 2.1rem;
  font-weight: 300;
}

.hero-container-main .quick-links {
  border-radius: 4px;
  width: auto;
  max-width: 350px;
  background-color: #312f2f;
  overflow: hidden;
}

.hero-container-main .quick-links .card-head {
  background-color: #fff;
  font-size: 1.6rem;
  padding: 10px 32px;
  font-weight: bold;
  line-height: 2.2rem;
}

.hero-container-main .quick-links .card-content {
  color: #fff;
  font-size: 1.6rem;
  padding: 10px 32px;
  font-weight: bold;
  line-height: 2.2rem;

  border: 1px solid rgba(255, 255, 255, 0.1);
}
.hero-container-main .quick-links .card-content p{
  text-size-adjust: inherit;
  
}

.hero-container-main .quick-links .card-content:hover {
  background-color: rgb(71, 64, 64);
  color: hsla(0, 0%, 100%, 0.6);
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-container-main .quick-links .card-content h2 a:hover {
  background-color: rgb(71, 64, 64);
  color: hsla(0, 0%, 100%, 0.6);
}

</style>