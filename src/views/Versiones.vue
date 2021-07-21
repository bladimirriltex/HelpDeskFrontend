<template>
  <div class="container bg-white fs-5">
    <table class="table table-hover table-bordered">
      <thead class="bg-dark text-white" >
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th class="align-middle" style="width:75px; margin:0 auto;">Historial</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aux in servicios" :key="aux.id">
          <th scope="row">{{ aux.id }}</th>
          <td>{{ aux.Nombre }}</td>
          <td class="align-middle">
            <button class="btn btn-danger btn-lg" @click="show(aux.id, aux.Nombre)">
              <i class="las la-history"></i>  Ver
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <modal name="version-servicio" :width="700" :resizable="true">
      <h3 class="mt-3 mx-3">Historial de cambios de {{ nombreServicio }}</h3>
      <table class="table py-5 px-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Version</th>
            <th scope="col">Descripcion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="aux in versionesServicios" :key="aux.id">
            <th>{{ aux.id }}</th>
            <td>{{ aux.nombre }}</td>
            <td>{{ aux.descripcion }}</td>
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
  name: "Versiones",
  data() {
    return {
      servicios: [],
      versionesServicios: [],
      nombreServicio: "",
    };
  },

  async created() {
    let res = await axios.get("servicio");
    this.servicios = res.data.data;
  },

  methods: {
    async show(id, nombreServicio) {
      console.log(nombreServicio);
      this.nombreServicio = nombreServicio;
      this.versionesServicios = [];
      let res = await axios.get(`servicio/${id}`);
      this.versionesServicios = res.data.data.Versiones;
      console.log(res, this.versionesServicios);

      this.$modal.show("version-servicio", { height: "auto" });
    },
    hide() {
      this.$modal.hide("version-servicio");
      this.nombreServicio = "";
    },
  },
  mount() {
    this.show();
  },
};
</script>