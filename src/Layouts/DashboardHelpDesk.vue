<template>
  <div class="">
    <input type="checkbox" id="nav-toggle" />
    <div class="sidebar">
      <div class="sidebar-brand">
        <img src="@/assets/img/utp-logo.png" alt="" />
      </div>

      <div class="sidebar-menu">
        <ul>
          <li>
            <router-link to="/dashboard">
              <span class="las la-clipboard-list"></span><span>Tablero</span>
            </router-link>
          </li>
          <li>
            <router-link to="/usuarios">
              <span class="las la-users"></span><span>Usuarios</span>
            </router-link>
          </li>
          <li>
            <router-link to="/incidentes">
              <span class="las la-exclamation-triangle"></span
              ><span>Incidentes</span>
            </router-link>
             
          </li>
          <li>
            <router-link to="/dashboard">
              <span class="las la-laptop-code"></span><span>Ordenes</span>
            </router-link>
            
          </li>
          <li>
            <router-link to="/dashboard">
              <span class="las la-receipt"></span><span>Inventario</span>
            </router-link>
            
          </li>
          <li>
            <router-link to="/dashboard">
              <span class="las la-user-circle"></span><span>Cuentas</span>
            </router-link>
            
          </li>
          <li>
            <router-link to="/dashboard">
              <span class="las la-clipboard-list"></span><span>Tareas</span>
            </router-link>
             
          </li>
        </ul>
      </div>
    </div>
    <div class="main-content">
      <header>
        <h3>
          <label for="nav-toggle">
            <span class="las la-bars"></span>
          </label>
        </h3>

        <div class="user-wrapper">
          <img
            src="../assets/img/perfil.jpeg"
            width="40px"
            height="30px"
            alt=""
          />
          <div>
            <h3>Edu Mollo Collanqui</h3>
            <small>Super Admin</small>
          </div>
        </div>
      </header>

      <main class="main-dashboard">
        <div class="recent-grid">
          <router-view/>
        </div>
      </main>
    </div>
  </div>
</template>

<script scope>

export default {
  name: "DashboardHelDesk",
  components: {
    
  },
};
</script>

<style >
:root {
  --main-color: #b50d30;
  --color-dark: #1d2231;
  --text-grey: #8390a2;
}

img {
  object-fit: cover;
}

.sidebar {
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--main-color);
  z-index: 100;
  transition: width 300ms;
}

.sidebar-brand {
  height: 98px;
  padding-left: 1rem 0rem 1rem 2rem;
  color: #fff;
  display: flex;
  justify-content: center;
}

.sidebar-brand img {
  width: 50%;
  object-fit: contain;
}

.sidebar-menu {
  margin-top: 1rem;
}

.sidebar-menu li {
  width: 100%;
  margin-bottom: 1.7rem;
  padding-left: 2rem;
}

.sidebar-menu a {
  padding-left: 1rem;
  padding: 8px 10px;
  display: block;
  color: #fff;
  font-size: 1.8rem;
}

.sidebar-menu a:active {
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--main-color);
  border-radius: 30px 0 0 30px;
}
.sidebar-menu a:hover {
  background: #fff;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  color: var(--main-color);
  border-radius: 30px 0 0 30px;
}

.sidebar-menu a span:first-child {
  font-size: 2.8rem;
  padding-right: 1rem;
}

#nav-toggle:checked + .sidebar {
  width: 70px;
}

#nav-toggle:checked + .sidebar .sidebar-brand,
#nav-toggle:checked + .sidebar li {
  padding-left: 1rem;
  text-align: center;
}
#nav-toggle:checked + .sidebar li a {
  padding-left: 0rem;
}

#nav-toggle:checked + .sidebar .sidebar-brand h2 span:last-child,
#nav-toggle:checked + .sidebar li a span:last-child {
  display: none;
}

#nav-toggle:checked ~ .main-content {
  margin-left: 70px;
}
#nav-toggle:checked ~ .main-content header {
  width: calc(100% - 70px);
  left: 70px;
}

.main-content {
  transition: margin-left 300ms;
  margin-left: 250px;
}

header {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 250px;
  width: calc(100% - 250px);
  top: 0;
  z-index: 100;
  transition: left 300ms;
  height: 65px;
}

#nav-toggle {
  display: none;
}

header h3 {
  color: #222;
  font-size: 2rem;
  cursor: pointer;
}
header h3:hover {
  color: rgb(211, 35, 35);
  font-size: 2rem;
}

header label span {
  position: relative;
  top: 2.5px;
  font-size: 3rem;
}

.user-wrapper {
  display: flex;
  align-items: center;
}

.user-wrapper img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
}

.user-wrapper small {
  font-size: 1.3rem;
  display: inline-block;
  color: var(--text-grey);
}
.user-wrapper h3 {
  font-size: 1.5rem;
}

.main-dashboard {
  margin-top: 40px;
  padding: 4rem 1.5rem;
  background: #f1f5f9;
  min-height: calc(100vh - 40px);
  height: auto;
}

.recent-grid {
  margin-top: 3.5rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 100%;
}

@media only screen and (max-width: 960px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }

  .recent-grid {
    grid-template-columns: 98%;
  }
}

@media only screen and (max-width: 768px) {
  .sidebar .sidebar-brand img {
    display: none;
  }

  .cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .recent-grid {
    grid-template-columns: 100%;
  }

  .search-wrapper {
    display: none;
  }

  .sidebar {
    left: -100% !important;
  }

  header h3 {
    display: flex;
    align-items: center;
  }

  header h3 label {
    display: inline-block;
    background-color: var(--main-color);
    padding-left: 0rem;
    margin-right: 1rem;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center !important;
  }

  header h3 span {
    text-align: center;
    padding-right: 0rem;
  }

  header h3 {
    font-size: 1rem;
  }

  .main-content {
    width: 100%;
    margin-left: 0rem;
  }

  header {
    width: 100% !important;
    left: 0 !important;
  }

  #nav-toggle:checked + .sidebar {
    left: 0 !important;
    z-index: 100;
    width: 250px;
  }

  #nav-toggle:checked + .sidebar .sidebar-brand,
  #nav-toggle:checked + .sidebar li {
    padding-left: 2rem;
    text-align: left;
  }
  #nav-toggle:checked + .sidebar li a {
    padding-left: 1rem;
  }

  #nav-toggle:checked + .sidebar .sidebar-brand h2 span:last-child,
  #nav-toggle:checked + .sidebar li a span:last-child {
    display: inline;
  }

  #nav-toggle:checked ~ .main-content {
    margin-left: 0rem !important;
  }
}

@media only screen and (max-width: 560px) {
  .cards {
    grid-template-columns: 100%;
  }
}
</style>
