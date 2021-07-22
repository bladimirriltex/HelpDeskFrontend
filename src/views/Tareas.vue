<template>
  <div class="projects">
    <div class="card">
      <div class="card-header">
        <h2>Requerimientos Recientes</h2>
         
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table-dashboard" width="100%">
            <thead>
              <td>Descripcion</td>
              <td>Usuario</td>
              <td>Servicio</td>
              <td>Canal</td>
              <td class="d-flex order">
                Estado
                <div @click="ordenar()" @dblclick="getData()">
                  <i
                    class="las la-sort-amount-down"
                    style="font-size: 1.8em"
                  ></i>
                </div>
              </td>
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
                <td style="width: 18%">
                  <div>
                    <span
                      v-if="aux.Status.id === 1"
                      class="status clasificado"
                    ></span>
                    <span
                      v-if="aux.Status.id === 2"
                      class="status asignado"
                    ></span>
                    <span
                      v-if="aux.Status.id === 3"
                      class="status endiagnostico"
                    ></span>
                    <span
                      v-if="aux.Status.id === 4"
                      class="status error"
                    ></span>
                    <span
                      v-if="aux.Status.id === 5"
                      class="status errorconocido"
                    ></span>
                    <span
                      v-if="aux.Status.id === 6"
                      class="status ensolucion"
                    ></span>
                    <span
                      v-if="aux.Status.id === 7"
                      class="status solucionado"
                    ></span>
                    <span
                      v-if="aux.Status.id === 8"
                      class="status cerrado"
                    ></span>
                    {{ aux.Status.Nombre }}
                  </div>
                </td>
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
  components: {
 
 
  },
  data() {
    return {
      incidentes: [],
      showModal: false,
    };
  },
  methods: {
    getIncidente() {},
    ordenar() {
      
      this.incidentes = this.incidentes.sort((a, b) => {
        if (a.Status.id > b.Status.id) {
          return 1;
        }
        if (a.Status.id < b.Status.id) {
          return -1;
        }
        return 0;
      });
      console.log(this.incidentes);
    },

    async getData() {
      this.incidentes = []
      let res = await axios.get("requerimiento");
      if (res.status == 200) {
        for (let incidente of res.data.data) {
          this.incidentes.push(incidente);
        }
      }
    },
  },
  async created() {
    this.getData();
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

.status.clasificado {
  background-color: rgb(154, 73, 201);
}
.status.asignado {
  background-color: rgb(253, 145, 4);
}
.status.endiagnostico {
  background-color: rgb(59, 145, 202);
}
.status.error {
  background-color: rgb(255, 1, 1);
}
.status.errorconocido {
  background-color: rgb(135, 0, 0);
}
.status.ensolucion {
  background-color: rgb(52, 177, 36);
}

.status.solucionado {
  background-color: rgb(20, 192, 35);
}
.status.cerrado {
  background-color: rgb(56, 54, 58);
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

.btn-utp {
  background: #fff;
  font-size: 1.2rem;
  border-radius: 10px;
  color: var(--main-color);
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: 2.5px solid var(--main-color);
}
.btn-utp:hover {
  background: rgb(196, 68, 68);
  font-size: 1.2rem;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: 2.5px solid #555;
}
.order div:hover {
  background-color: #00000055;
  border-radius: 5px;
}
</style>