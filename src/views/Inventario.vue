<template>
  <div class="container bg-white fs-5">
    <table class="table table-hover table-bordered">
      <thead class="bg-dark text-white">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th class="align-middle" style="width: 75px; margin: 0 auto">
            Historial
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aux in inventario" :key="aux.id">
          <th scope="row">{{ aux.id }}</th>
          <td>{{ aux.nombre }}</td>
          <td class="align-middle">
            <button
              class="btn btn-danger btn-lg"
              @click="show(aux.id, aux.nombre)"
            >
              <i class="las la-history"></i> Ver
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <modal name="version-servicio" :width="700" :resizable="true">
      
        <h3 class="mt-3 mx-3">Historial de cambios de {{ nombreMaquina }}</h3>
        <table class="table py-5 px-5">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Descripcion</th>
            </tr>
          </thead>
          <div v-if="this.configuraciones.length===0" class="fs-3 py-5"><center>No hay configuraciones en este equipo</center></div>
          <tbody>
            <tr v-for="aux in configuraciones" :key="aux.id">
              <th>{{ aux.id }}</th>
              <td>{{ aux.configuracion }}</td>
            </tr>
          </tbody>
        </table>
     
    </modal>
  </div>
</template>
<style scoped>
</style>

<script>
import axios from "axios";
export default {
  name: "Inventario",
  data() {
    return {
      inventario: [],
      configuraciones: [],
      nombreMaquina: "",
    };
  },

  async created() {
    let res = await axios.get("inventario");
    this.inventario = res.data.data;
  },

  methods: {
    async show(id, nombreMaquina) {
      console.log(nombreMaquina);
      this.nombreMaquina = nombreMaquina;
      this.versionesServicios = [];
      let res = await axios.get(`inventario/${id}`);
      this.configuraciones = res.data.data.configuraciones;
      console.log(res, this.configuraciones);

      this.$modal.show("version-servicio", { height: "auto" });
    },
    hide() {
      this.$modal.hide("version-servicio");
      this.nombreMaquina = "";
    },
  },
  mount() {
    this.show();
  },
};
</script>