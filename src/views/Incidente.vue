<template>
  <div class="card-incidente">
    <div class="row">
      <div class="col-6">
        <h3>Datos de Incidente</h3>
      </div>
      <div class="col-6" >
        <button v-if="dataIncidente.Respuesta===null" class="btn btn-success float-end">Dar solucion</button>
        <button v-if="dataIncidente.Respuesta!=null" class="btn btn-dark float-end">Resuelto</button>
      </div>
    </div>
    <div class="contenedor col-12">
      <div class="fs-5">
        <div class="row">
          <label for="nombre">Incidente</label>
          <input
            v-model="dataIncidente.Nombre"
            type="text"
            class="form-control my-2"
            id="nombre"
            readonly
          />
        </div>
        <div class="row">
          <div class="col-6">
            <label for="nivel">Nivel de Riesgo</label>
            <input
              v-model="dataIncidente.Nivel_Riesgo.Nombre"
              class="form-control my-2"
              id="nivel"
              readonly
            />
            <label for="servicio">Servicio</label>
            <input
              v-model="dataIncidente.Servicio.Nombre"
              type="text"
              class="form-control my-2"
              id="servicio"
              readonly
            />
            <label for="soporte">Asignado</label>
            <input
              v-model="dataIncidente.Usuario_Soporte.Nombre"
              type="text"
              class="form-control my-2"
              id="soporte"
              readonly
            />

            <label for="fecha">Fecha Registrada</label>
            <input
              v-model="dataIncidente.Fecha_Inicio"
              type="text"
              class="form-control my-2"
              id="fecha"
              readonly
            />
          </div>
          <div class="col-6">
            <label for="Tipo">Tipo</label>
            <input
              v-model="dataIncidente.Tipo_Incidente.Nombre"
              type="text"
              class="form-control my-2"
              id="Tipo"
              readonly
            />

            <label for="estado">Estado</label>
            <input
              v-model="dataIncidente.Status.Nombre"
              type="text"
              class="form-control my-2"
              id="estado"
              readonly
            />

            <label for="origen">Afectado</label>
            <input
              v-model="dataIncidente.Usuario_Cliente.Nombre"
              type="text"
              class="form-control my-2"
              id="origen"
              readonly
            />
            <label for="fechafin">Fecha Concluida</label>
            <input
              v-model="dataIncidente.Fecha_Fin"
              type="text"
              class="form-control my-2"
              id="fechafin"
              readonly
            />
          </div>

          <label for="exampleFormControlTextarea1" class="form-label" readonly
            >Más detalles</label
          >
          <textarea
            v-model="dataIncidente.Descripcion"
            class="form-control descripcion"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>

          <div class="row col-12">
            <div class="img-incidente text-center">
              <img src="@/assets/img/incidente.png" alt=""/>
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
    };
  },
  methods: {},

  async created() {
    let res = await axios.get(
      "http://127.0.0.1:8000/api/incidente/" + this.incidente
    );
    console.log(res);
    this.dataIncidente = res.data.data;
    console.log(this.dataIncidente);
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