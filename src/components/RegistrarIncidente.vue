<template>
  <div class="form-container">
    <form @submit.prevent="registrarIncidente()" class="">
      <h2 class="fs-1">Resgistrar Incidente</h2>
      <div class="mb-3">
        <input v-model="nombreIncidente"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="¿Que incidente?"
        />
      </div>

      <div class="row my-2">
        <div class="col-6">
          <select
            v-model="servicio"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>¿Que servicio?</option>
            <option
              v-for="servicio in servicios"
              :value="servicio.id"
              :key="servicio.id"
            >
              {{ servicio.Nombre }}
            </option>
          </select>
        </div>
        <div class="col-6">
          <select
            v-model="tipoIncidente"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>¿Que tipo?</option>
            <option
              v-for="tipo in tiposIncidentes"
              :value="tipo.id"
              :key="tipo.id"
            >
              {{ tipo.Nombre }}
            </option>
          </select>
        </div>
      </div>
      <div class="row my-2">
        <div class="col-6">
          <select
            v-model="canal"
            class="form-select"
            aria-label="Default select example"
          >
          <option selected>¿Que canal?</option>
            <option
              v-for="canal in canales"
              v-bind:value="canal.id"
              :key="canal.id"
            >
              {{ canal.Nombre }}
            </option>
          </select>
        </div>
        <div class="col-6">
          <select
            v-model="nivel"
            class="form-select"
            aria-label="Default select example"
          >
         <option selected>¿Que nivel?</option>
            <option
              v-for="nivel in niveles"
              v-bind:value="nivel.id"
              :key="nivel.id"
            >
              {{ nivel.Nombre }}
            </option>
          </select>
        </div>
      </div>
      <div class="row my-2">
        <div class="col-6">
          <select
            v-model="estado"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>¿Estado?</option>
            <option
              v-for="estado in estados"
              v-bind:value="estado.id"
              :key="estado.id"
            >
              {{ estado.Nombre }}
            </option>
          </select>
        </div>
        <div class="col-6">
          <select
            v-model="usuarioSoporte"
            class="form-select"
            aria-label="Default select example"
          >
             <option selected>Asignar a...</option>
            <option
              v-for="usuario in usuariosDeSoporte"
              v-bind:value="usuario.id"
              :key="usuario.id"
            >
              {{ usuario.Nombre }}
            </option>
          </select>
        </div>
      </div>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Describenos mas del incidente</label>
        <textarea
          v-model="descripcion"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
        <div class="my-3">
          <input
            type="file"
            @change="previewFiles"
            multiple
            class="form-control"
            id="formFile"   
          />
        </div>
      </div>
      <center>
        <input type="submit" class="btn btn-dark" style="width: 80%" value="Registrar">
      </center>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "RegistrarIncidente",
  data() {
    return {
      //data api
      servicios: [],
      tiposIncidentes: [],
      canales: [],
      niveles: [],
      estados: [],
      usuariosDeSoporte: [],

      //datamodel
      nombreIncidente: "",
      servicio: "¿Que servicio?",
      tipoIncidente: "¿Que tipo?",
      canal: "¿Que canal?",
      nivel: "¿Que nivel?",
      estado: "¿Estado?",
      usuarioSoporte: "Asignar a...",
      descripcion: "",
      file: null,
    };
  },
  async created() {
    let serviciosData = await axios.get("http://127.0.0.1:8000/api/servicio");
    let tiposIncidentesData = await axios.get(
      "http://127.0.0.1:8000/api/tipo_incidente"
    );
    let canalesData = await axios.get("http://127.0.0.1:8000/api/canal");
    let nivelesData = await axios.get("http://127.0.0.1:8000/api/nivel_riesgo");
    let estadosData = await axios.get("http://127.0.0.1:8000/api/status");
    let usuario_soporte = await axios.get(
      "http://127.0.0.1:8000/api/usuario_soporte"
    );

    this.servicios = serviciosData.data.data;
    this.tiposIncidentes = tiposIncidentesData.data.data;
    this.canales = canalesData.data.data;
    this.niveles = nivelesData.data.data;
    this.estados = estadosData.data.data;
    this.usuariosDeSoporte = usuario_soporte.data.data;

    //console.log(serviciosData,tiposIncidentesData,CanalesData,nivelesData,estadosData,usuario_soporte);
  },
  methods: {
    registrarIncidente() {
       
      console.log(this.nombreIncidente);
      console.log(this.servicio);
      console.log(this.tipoIncidente);
      console.log(this.canal);
      console.log(this.nivel);
      console.log(this.estado);
      console.log(this.descripcion);
      console.log(this.file);
    },

    previewFiles(event) {
      this.file = event.target.files;
      console.log(event.target.files);
    },
  },
};
</script>
<style>
.form-container form textarea {
  resize: none;
}
</style>
