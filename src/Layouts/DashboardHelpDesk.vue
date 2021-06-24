<template>
  <div class="">
    <input type="checkbox" id="nav-toggle" />
    <div class="sidebar">
      <div class="sidebar-brand">
        <h2><span class="lab la-accusoft"></span><span>UTP</span></h2>
      </div>

      <div class="sidebar-menu">
        <ul>
          <li>
            <a href="" class="active"
              ><span class="las la-igloo"></span><span>Tablero</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-users"></span><span>Clientes</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-clipboard-list"></span
              ><span>Proyectos</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-shopping-bag"></span><span>Ordenes</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-receipt"></span><span>Inventario</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-user-circle"></span><span>Cuentas</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-clipboard-list"></span><span>Tareas</span></a
            >
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
          Tablero
        </h3>

        <div class="search-wrapper">
          <span class="las la-search"></span>
          <input type="search" placeholder="Search here" />
        </div>

        <div class="user-wrapper">
          <img
            src="../assets/img/person.jpg"
            width="40px"
            height="30px"
            alt=""
          />
          <div>
            <h4>Edu Mollo</h4>
            <small>Super Admin</small>
          </div>
        </div>
      </header>

      <main class="main-dashboard">
        
        <EstadisticasIncidentes/>
        <div class="recent-grid">
          <TablaIncidentes/>
          <Cliente/>
          
        </div>
      </main>
    </div>
  </div>
</template>

<script scope>
import EstadisticasIncidentes from '@/components/EstadisticasIncidentes.vue';
import TablaIncidentes from '@/components/TablaIncidentes.vue';
import Cliente from '@/components/Cliente'; 

export default {
  name:"DashboardHelDesk",
  components:{
    EstadisticasIncidentes,
    TablaIncidentes,
    Cliente
  }

};
</script>

<style >


:root {
  --main-color: #B50D30;
  --color-dark: #1d2231;
  --text-grey: #8390a2;
}



img {
  object-fit: cover;
}

.sidebar {
  width: 345px;
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
}
.sidebar-brand span {
  display: inline-block;
  padding-right: 1rem;
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
  display: block;
  color: #fff;
  font-size: 1.8rem;
}

.sidebar-menu a.active {
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--main-color);
  border-radius: 30px 0 0 30px;
}

.sidebar-menu a span:first-child {
  font-size: 2rem;
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
  margin-left: 345px;
}

header {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 345px;
  width: calc(100% - 345px);
  top: 0;
  z-index: 100;
  transition: left 300ms;
}

#nav-toggle {
  display: none;
}

header h3 {
  color: #222;
  font-size: 2rem;
}

header label span {
  position: relative;
  top:2.5px;
  font-size: 3rem;
}

.search-wrapper {
  border: 1px solid #ccc;
  border-radius: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
}
.search-wrapper span {
  display: inline-block;
  padding: 0rem 2rem;
  font-size: 2rem;
}

.search-wrapper input {
  height: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;
}

.user-wrapper {
  display: flex;
  align-items: center;
}

.user-wrapper img {
  border-radius: 50%;
  margin-right: 1rem;
}

.user-wrapper small {
  display: inline-block;
  color: var(--text-grey);
}

.main-dashboard {
  margin-top: 85px;
  padding: 2rem 1.5rem;
  background: #f1f5f9;
  min-height: calc(100vh - 90px);
}



.recent-grid {
  margin-top: 3.5rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 70% auto;
}




@media only screen and (max-width: 960px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }

  .recent-grid {
    grid-template-columns: 60% 40%;
  }
}

@media only screen and (max-width: 768px) {
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
    width: 345px;
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
