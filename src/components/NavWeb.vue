<template>
  <div>
    <div class="bar-nav-container">
      <nav class="container menu">
        <div class="logo-container">
          <img src="@/assets/img/utp.jpg" alt="" />
        </div>
        <ul>
          <li>
            <router-link to="/"
              ><i class="las la-home"></i>Página de Inicio</router-link
            >
          </li>
          <li>
            <router-link to="/soluciones"
              ><i class="las la-scroll"></i>Soluciones</router-link
            >
          </li>
           
          <li>
            <router-link to="/articulo"
              ><i class="las la-calendar-alt"></i>Articulos</router-link
            >
          </li>
          <li>
            <router-link to="/login"
              ><i class="las la-user-alt"></i>Iniciar Sesión</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavWeb",
};
</script>
<style>
:root {
  --red-utp: #b50d30;
  --black: #000;
  --white: #fff;
}
.bar-nav-container {
  background-color: var(--white);
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
}

.bar-nav-container .menu {
  display: flex;
  justify-content: space-around;
}

.bar-nav-container .menu ul {
  width: 60%;
  max-width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(36, 34, 34);
}
.bar-nav-container .menu ul li {
  padding: 5px;

  border-radius: 3px;
}
.bar-nav-container .menu ul li a {
  padding: 5px;
  width: inherit;
}

.bar-nav-container .menu ul li a:hover {
  background-color: #3d3636;
  padding: 5px;
  border-radius: 5px;
  color: #fff;
}

.logo-container {
  width: 180px;
}

.logo-container img {
  width: 100%;
}
</style>