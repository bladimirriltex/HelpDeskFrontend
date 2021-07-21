<template>
  <form @submit.prevent="incidente1()" class="">
    <div class="card-incidente fs-2">
      <div class="row">
        <div class="col-6">
          <h3>Datos de Incidente</h3>
        </div>
        <div class="col-6" v-if="rolUsuario === 'cliente'">
          <button
            v-if="dataIncidente.Status.id === 1"
            class="btn btn-danger float-end"
            disabled
          >
            Sin Solucion
          </button>
          <button
            v-if="dataIncidente.Status.id === 2"
            class="btn btn-warning float-end"
            disabled
          >
            Buscando Solucion
          </button>
          <button
            v-if="dataIncidente.Status.id === 3"
            class="btn btn-warning float-end"
            disabled
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

        <div class="col-6" v-if="rolUsuario != 'cliente'">
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
            v-if="dataIncidente.Status.id === 7"
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
              <select v-model="nivelId" class="form-control my-2" id="nivel">
                <option
                  v-for="nivel in this.niveles"
                  :value="nivel.id"
                  :key="nivel.id"
                >
                  {{ nivel.Nombre }}
                </option>
              </select>
              <label for="servicio">Servicio</label>
              <select
                v-model="servicioId"
                type="text"
                class="form-control my-2"
                id="servicio"
              >
                <option
                  v-for="servicio in this.servicios"
                  :value="servicio.id"
                  :key="servicio.id"
                >
                  {{ servicio.Nombre }}
                </option>
              </select>
              <label for="soporte">Asignado</label>
              <select
                v-model="usuarioSoporteId"
                type="text"
                class="form-control my-2"
                id="soporte"
              >
                <option
                  v-for="usuarioSoporte in this.usuariosDeSoporte"
                  :value="usuarioSoporte.id"
                  :key="usuarioSoporte.id"
                >
                  {{ usuarioSoporte.Nombre }}
                </option>
              </select>

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
                v-model="tipoIncidenteId"
                type="text"
                class="form-control my-2"
                id="Tipo"
              >
                <option
                  v-for="tipoIncidente in this.tiposIncidentes"
                  :value="tipoIncidente.id"
                  :key="tipoIncidente.id"
                >
                  {{ tipoIncidente.Nombre }}
                </option>
              </select>

              <label for="estado">Estado</label>
              <select
                v-model="estadoId"
                type="text"
                class="form-control my-2"
                id="estado"
              >
                <option
                  v-for="estado in this.estados"
                  :value="estado.id"
                  :key="estado.id"
                >
                  {{ estado.Nombre }}
                </option>
              </select>

              <label for="origen">Afectado</label>
              <select
                v-model="usuarioAfectadoId"
                type="text"
                class="form-control my-2"
                id="origen"
              >
                <option
                  v-for="usuarioAfectado in this.usuarioClientes"
                  :value="usuarioAfectado.id"
                  :key="usuarioAfectado.id"
                >
                  {{ usuarioAfectado.Nombre }}
                </option>
              </select>
              <label for="canal">Canal</label>
              <select
                v-model="canalId"
                type="text"
                class="form-control my-2"
                id="canal"
              >
                <option
                  v-for="canal in this.canales"
                  :value="canal.id"
                  :key="canal.id"
                >
                  {{ canal.Nombre }}
                </option>
              </select>
            </div>

            <label for="exampleFormControlTextarea1" class="form-label" readonly
              >Más detalles</label
            >
            <textarea
              v-model="descripcion"
              class="form-control descripcion"
              id="exampleFormControlTextarea1"
              rows="10"
              readonly
            ></textarea>

            <div class="btn-soluciones">
              <button class="btn btn-dark btn-lg" @click="nuevaSolucion()">
                Nueva Solucion
              </button>
              <modal name="nueva-solucion" :width="800" :height="400" :resizable="true" >
                <div class="container mt-5">
                  <center><h3>Nueva solucion</h3></center>
                  <hr>
                  <label for="nombreIncidente">Nombre del Incidente:</label>
                  <input
                    id="nombreIncidente"
                    type="text"
                    class="form-control my-3"
                    v-model="nombreIncidente"
                    readonly
                  />
                  

                   <label for="nombreSolucion">Nombre de la Solucion:</label>
                   <input
                    type="text"
                    class="form-control my-3"
                    v-model="nombreSolucion"
                    id="nombreSolucion"
                  />

                  <quill-editor
                    ref="myTextEditor"
                    v-model="contenido"
                    :config="editorOption"
                  ></quill-editor>
                  <center>
                    <button class="btn btn-dark btn-lg mt-3" @click="save()">
                      Registrar Solucion
                    </button>
                  </center>
                </div>
              </modal>
              <button
                class="btn btn-dark btn-lg"
                @click="seleccionarSolucion()"
              >
                Seleccinar Solucion
              </button>
              <modal name="seleccionar-solucion" :resizable="true" :height="600">
                <div class="container bg-white fs-5 mt-4">
                  <table class="table table-hover table-bordered">
                    <thead class="bg-dark text-white">
                      <tr>
                        <th>Id</th>
                        <th>Nombre Solucion</th>
                        <th
                          class="align-middle"
                          style="width: 75px; margin: 0 auto"
                        >
                          Accion
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="aux in soluciones" :key="aux.id">
                        <th scope="row">{{ aux.id }}</th>
                        <td>{{ aux.Nombre }}</td>
                        <td class="align-middle">
                          <button
                            class="btn btn-danger"
                            @click="enviarSolucion(aux.id)"
                          >
                            Seleccionar
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import axios from "axios";
export default {
  components: {
    quillEditor,
  },
  props: {
    incidente: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      dataIncidente: {},
      servicios: [],
      tiposIncidentes: [],
      canales: [],
      niveles: [],
      estados: [],
      usuariosDeSoporte: [],
      usuarioClientes: [],
      soluciones: [],

      nombreSolucion:"",
      idIncidente: null,
      nombreIncidente: "",
      servicio: "",
      servicioId: 0,
      tipoIncidente: "",
      tipoIncidenteId: 0,
      canal: "",
      canalId: 0,
      nivel: "",
      nivelId: 0,
      estado: "",
      estadoId: 0,
      usuarioSoporte: "",
      usuarioSoporteId: 0,
      usuarioAfectado: "",
      usuarioAfectadoId: 0,
      descripcion: "",
      cargo: "",
      rol: "",
      fechaFin: "",
      fechaInicio: "",
      file: null,

      rolUsuario: "",
      contenido: "",
      editorOption: {
        theme: "bubble",
      },
    };
  },

  methods: {
    async getData() {
      let serviciosData = await axios.get("http://127.0.0.1:8000/api/servicio");
      let tiposIncidentesData = await axios.get(
        "http://127.0.0.1:8000/api/tipo_incidente"
      );
      let canalesData = await axios.get("http://127.0.0.1:8000/api/canal");
      let nivelesData = await axios.get(
        "http://127.0.0.1:8000/api/nivel_riesgo"
      );
      let estadosData = await axios.get("http://127.0.0.1:8000/api/status");
      let usuario_soporte = await axios.get(
        "http://127.0.0.1:8000/api/usuario_soporte"
      );
      let usuarioCliente = await axios.get("usuario_cliente");

      let soluciones = await axios.get("solucion");
      console.log(soluciones);
      this.soluciones = soluciones.data.data;

      this.usuarioClientes = usuarioCliente.data.data;
      this.servicios = serviciosData.data.data;
      this.tiposIncidentes = tiposIncidentesData.data.data;
      this.canales = canalesData.data.data;
      this.niveles = nivelesData.data.data;
      this.estados = estadosData.data.data;
      this.usuariosDeSoporte = usuario_soporte.data.data;

      let res = await axios.get("incidente/" + this.incidente);

      this.dataIncidente = res.data.data;
      console.log(this.dataIncidente);
      let resCargo = await axios.get(
        "cargo/" + this.dataIncidente.Usuario_Soporte.Id_Cargo
      );
      let resRol = await axios.get("rol/" + localStorage.getItem("rol"));
      this.dataIncidente = res.data.data;
      this.nombreIncidente = this.dataIncidente.Nombre;
      this.servicio = this.dataIncidente.Servicio.Nombre;
      this.servicioId = this.dataIncidente.Servicio.id;
      this.tipoIncidente = this.dataIncidente.Tipo_Incidente.Nombre;
      this.tipoIncidenteId = this.dataIncidente.Tipo_Incidente.id;
      this.canal = this.dataIncidente.Canal.Nombre;
      this.canalId = this.dataIncidente.Canal.id;
      this.nivel = this.dataIncidente.Nivel_Riesgo.Nombre;
      this.nivelId = this.dataIncidente.Nivel_Riesgo.id;
      this.estado = this.dataIncidente.Status.Nombre;
      this.estadoId = this.dataIncidente.Status.id;
      this.usuarioSoporte =
        this.dataIncidente.Usuario_Soporte.Nombre +
        " - " +
        resCargo.data.data.Nombre;
      this.usuarioSoporteId = this.dataIncidente.Usuario_Soporte.id;
      this.usuarioAfectado =
        this.dataIncidente.Usuario_Cliente.Nombre +
        " - " +
        resRol.data.data.Nombre;
      this.usuarioAfectadoId = this.dataIncidente.Usuario_Cliente.id;
      this.descripcion = this.dataIncidente.Descripcion;
      this.fechaFin = this.dataIncidente.Fecha_Fin;
      this.fechaInicio = this.dataIncidente.Fecha_Inicio;
      this.file = this.dataIncidente.Archivo;

      this.rolUsuario = localStorage.getItem("tipoUsuario");
      console.log(this.nivel);
      console.log(this.fechaInicio);
      console.log(res);
    },

    async save() {
      let solucionNueva = {
        Nombre: this.nombreSolucion,
        Descripcion: this.contenido,
      };
      console.log(solucionNueva);
      let registrarSolucion = await axios.post("solucion", solucionNueva);
      console.log(registrarSolucion);

      const incidenteSolucion = {
        id_solucion: registrarSolucion.data.id,
        Id_Status: 7,
      };
      console.log(incidenteSolucion);
      let res = await axios.put(
        "incidente/" + this.incidente,
        incidenteSolucion
      );
      console.log(res);
      if(res.data.res===true)
      {
        this.getData();
      }
    },

    async enviarSolucion(id) {
      const incidenteSolucion = {
        id_solucion: id,
        Id_Status: 7,
      };
      console.log(incidenteSolucion);
      let res = await axios.put(
        "incidente/" + this.incidente,
        incidenteSolucion
      );
      console.log(res);

      if (res.data.res === true) {
        alert("Accions exitosa");
        this.$router.push("/dashboard");
      }
    },
    nuevaSolucion() {
      this.$modal.show("nueva-solucion");
    },
    seleccionarSolucion() {
      this.$modal.show("seleccionar-solucion");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },

    mount() {
      this.show();
    },
  },

  created() {
    this.getData();
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

.btn-soluciones {
  display: flex;
  margin-top: 10px;
  justify-content: center;
  gap: 15px;
}
</style>