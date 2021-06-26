<template>
  <div class="projects">
    <div class="card">
      <div class="card-header">
        <h2>Incidentes Recientes</h2>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table-dashboard" width="100%">
            <thead>
              <td>Descripcion</td>
              <td>Usuario</td>
              <td>Servicio</td>
              <td>Canal</td>
              <td>Estado</td>
              <td>Acciones</td>
            </thead>
            <tbody>
              <tr
                class="tr-row"
                v-for="aux in incidentes"
                :key="aux.id"
                @click="getIncidente()"
                :props="aux"
              >
                <td>{{ aux.Nombre }}</td>
                <td>{{ aux.Usuario_Cliente.Nombre }}</td>
                <td>{{ aux.Servicio.Nombre }}</td>
                <td>{{ aux.Canal.Nombre }}</td>
                <td>{{ aux.Status.Nombre }}</td>
                <td class="accion">
                  <router-link
                    :to="{
                      name: 'incidente',
                      params: { incidente: aux.id.toString() },
                    }"
                    ><i class="lar la-eye"></i><span>Ver</span></router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "TablaIncidentes",
  components: {},
  data() {
    return {
      incidentes: [],
    };
  },
  methods: {
    getIncidente() {},
  },
  async created() {
    let res = await axios.get("http://127.0.0.1:8000/api/incidente");
    console.log(res);
    if (res.status == 200) {
      for (let incidente of res.data.data) {
        console.log(incidente);
        this.incidentes.push(incidente);
      }
    }

    console.log(res.status);
  },
};
</script>
<style>
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
.card {
  background: #fff;
  border-radius: 5px;
}

.card-header,
.card-body {
  padding: 1rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}

.table-dashboard {
  border-collapse: collapse;
}
.table-dashboard thead td {
  border-bottom: 2px solid #f0f0f0;
}

thead td {
  font-weight: 700;
}

td {
  padding: 0.8rem 3em;
  font-size: 1.3rem;
  color: #222;
}
td .status {
  display: inline-block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 1rem;
}
tr td:last-child {
  display: flex;
  align-items: center;
}
.tr-row {
  border-bottom: 1px solid #22202029;
}
.tr-row .accion a {
  background-color: var(--main-color);
  color: #fff;
  padding: 5px 8px;
  border-radius: 5px;
}
.tr-row .accion a:hover {
  background-color: #000;
}

.status.purple {
  background-color: rebeccapurple;
}

.status.pink {
  background-color: deeppink;
}

.status.orange {
  background-color: orangered;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}
</style>