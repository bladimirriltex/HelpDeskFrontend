<template>
  <div class="card-incidente fs-2">
    <div class="row">
      <div class="col-6">
        <h3>Datos de Incidente</h3>
      </div>
          <div class="col-6" v-if="rolUsuario==='cliente'">
            <button
              v-if="dataIncidente.Status.id === 1"
              class="btn btn-danger float-end" disabled
            >
              Sin Solucion
            </button>
            <button
              v-if="dataIncidente.Status.id === 2"
              class="btn btn-warning float-end" disabled
            >
              Buscando Solucion
            </button>
            <button
              v-if="dataIncidente.Status.id === 3"
              class="btn btn-warning float-end" disabled
            >
              Visita Presencial
            </button>
            <button
              v-if="dataIncidente.Status.id === 4" 
              class="btn btn-dark float-end"
              disabled
            >
              Resuelto
            </button>
          </div>

          <div class="col-6" v-if="rolUsuario !='cliente'">
            <button
              v-if="dataIncidente.Status.id === 1"
              class="btn btn-success float-end" 
            >
              Solucionar
            </button>
            <button
              v-if="dataIncidente.Status.id === 2"
              class="btn btn-warning float-end" 
            >
              Buscando Solucion
            </button>
            <button
              v-if="dataIncidente.Status.id === 3"
              class="btn btn-warning float-end" 
            >
              Visita Presencial
            </button>
            <button
              v-if="dataIncidente.Status.id === 4" 
              class="btn btn-dark float-end"
              disabled
            >
              Resuelto
            </button>
          </div>
    </div>
    <div class="contenedor col-12">
      <div class="fs-5">
        <div class="row">
          <label for="nombre">Incidente</label>
          <input
            v-model="nombreIncidente"
            type="text"
            class="form-control my-2"
            id="nombre"
            readonly
          />
        </div>
        <div class="row">
          <div class="col-6">
            <label for="nivel">Nivel de Riesgo</label>
            <select
              v-model="nivel"
              class="form-control my-2"
              id="nivel"
              readonly
            />
            <label for="servicio">Servicio</label>
            <select
              v-model="servicio"
              type="text"
              class="form-control my-2"
              id="servicio"
              readonly
            />
            <label for="soporte">Asignado</label>
            <select
              v-model="usuarioSoporte"
              type="text"
              class="form-control my-2"
              id="soporte"
              readonly
            />

            <label for="fecha">Fecha Registrada</label>
            <input
              v-model="fechaInicio"
              type="text"
              class="form-control my-2"
              id="fecha"
              readonly
            />

            <label for="fechafin">Fecha Concluida</label>
            <input
              v-model="fechaFin"
              type="text"
              class="form-control my-2"
              id="fechafin"
              readonly
            />
          </div>
          <div class="col-6">
            <label for="Tipo">Tipo</label>
            <select
              v-model="tipoIncidente"
              type="text"
              class="form-control my-2"
              id="Tipo"
              readonly
            />

            <label for="estado">Estado</label>
            <select
              v-model="estado"
              type="text"
              class="form-control my-2"
              id="estado"
              readonly
            />

            <label for="origen">Afectado</label>
            <select
              v-model="usuarioAfectado"
              type="text"
              class="form-control my-2"
              id="origen"
              readonly
            />
            <label for="canal">Canal</label>
            <select
              v-model="canal"
              type="text"
              class="form-control my-2"
              id="canal"
              readonly
            />
          </div>

          <label for="exampleFormControlTextarea1" class="form-label" readonly
            >Más detalles</label
          >
          <textarea
            v-model="descripcion"
            class="form-control descripcion"
            id="exampleFormControlTextarea1"
            rows="10" readonly
          ></textarea>

          <div class="row col-12">
            <div class="img-incidente text-center">
              <img src="@/assets/img/incidente.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    incidente: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      dataIncidente: {},
      nombreIncidente: "",
      servicio: "",
      tipoIncidente: "",
      canal: "",
      nivel: "",
      estado: "",
      usuarioSoporte: "",
      usuarioAfectado:"",
      descripcion: "",
      cargo:"",
      rol:"",
      fechaFin:"",
      fechaInicio:"",
      file: null,

      rolUsuario:"",
    };
  },
  methods: {},

  async created() {
    let res = await axios.get("incidente/" + this.incidente);
    
    this.dataIncidente=res.data.data;
    console.log(this.dataIncidente)
    let resCargo=await axios.get("cargo/"+this.dataIncidente.Usuario_Soporte.Id_Cargo);
    let resRol=await axios.get("rol/"+localStorage.getItem("rol"))
    this.dataIncidente = res.data.data;
    this.nombreIncidente = this.dataIncidente.Nombre;
    this.servicio = this.dataIncidente.Servicio.Nombre;
    this.tipoIncidente = this.dataIncidente.Tipo_Incidente.Nombre;
    this.canal = this.dataIncidente.Canal.Nombre;
    this.nivel = this.dataIncidente.Nivel_Riesgo.Nombre;
    this.estado = this.dataIncidente.Status.Nombre;
    this.usuarioSoporte = this.dataIncidente.Usuario_Soporte.Nombre+" - "+ resCargo.data.data.Nombre;
    this.usuarioAfectado = this.dataIncidente.Usuario_Cliente.Nombre+" - "+ resRol.data.data.Nombre;
    this.descripcion = this.dataIncidente.Descripcion;
    this.fechaFin= this.dataIncidente.Fecha_Fin;
    this.fechaInicio=this.dataIncidente.Fecha_Inicio;
    this.file = this.dataIncidente.Archivo;

    this.rolUsuario=localStorage.getItem("tipoUsuario")
  },
};
</script>
<style>
.card-incidente {
  margin: auto;
  width: 80%;
  padding: 20px 30px;
  height: auto;
  background: #fff;
}
.descripcion {
  resize: none;
  width: 98%;
  margin: auto;
}

.img-incidente {
  width: 80%;
  margin: 20px auto;
}

.img-incidente img {
  width: 100%;
  object-fit: contain;
}
</style>