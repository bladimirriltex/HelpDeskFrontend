<template>
  <div class="projects">
    <div class="card">
      <div class="card-header">
        <h2>Solicitudes Recientes</h2>
        <button class="btn-utp" id="show-modal" @click="showModal = true">
          <i class="las la-plus-circle"></i>Nuevo Incidente
        </button>

        <Modal v-if="showModal" @close="showModal = false">
          <RegistrarIncidenteUsuario slot="body" style="width: 90%" />
        </Modal>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table-dashboard" width="100%">
            <thead>
              <td>Descripcion</td>
              <td>Servicio</td>
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

                <td>{{ aux.Servicio.Nombre }}</td>

                <td style="width: 18%">
                  <div>
                    <span
                      v-if="aux.Status.id === 1"
                      class="status pendiente"
                    ></span>
                    <span
                      v-if="aux.Status.id === 2"
                      class="status progreso"
                    ></span>
                    <span
                      v-if="aux.Status.id === 3"
                      class="status presencial"
                    ></span>
                    <span
                      v-if="aux.Status.id === 4"
                      class="status resuelto"
                    ></span>
                    {{ aux.Status.Nombre }}
                  </div>
                </td>
                <td class="accion">
                  <router-link
                    :to="{
                      name: 'incidenteuser',
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
import Modal from "@/components/Modal.vue";
import RegistrarIncidenteUsuario from "@/components/RegistrarIncidenteUsuario.vue";
export default {
  name: "TablaIncidentes",
  components: {
    Modal,
    RegistrarIncidenteUsuario,
  },
  data() {
    return {
      incidentes: [],
      showModal: false,
    };
  },
  methods: {
    getIncidente() {},
  },
  async created() {
    const res = await axios.get("incidente");
    console.log(res.data.data);

    let arrayIncidentes = res.data.data;
    for (const incidente of arrayIncidentes) {
      if (incidente.Usuario_Cliente.id == localStorage.getItem("idUser")) {
        console.log(incidente.Usuario_Cliente.Nombre);
        this.incidentes.push(incidente);
      }
    }
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

.status.resuelto {
  background-color: rgb(51, 165, 121);
}

.status.pendiente {
  background-color: rgb(211, 21, 37);
}

.status.progreso {
  background-color: rgb(238, 150, 17);
}
.status.presencial {
  background-color: rgb(128, 0, 255);
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
</style>