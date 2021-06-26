<template>
  <div class="customers">
    <div class="card">
      <div class="card-header">
        <h2>Usuarios</h2>
      </div>
      <div class="card-body" >
        <div class="customer" v-for="usuariosCliente in usuariosClientes" :key="usuariosCliente.id">
          <div class="info">
            <img src="../assets/img/perfil.jpeg" width="40px" height="40px" />
            <div class="">
              <h4>{{ usuariosCliente.Nombre}} {{ usuariosCliente.Apellidos }}</h4>
              <small>{{ usuariosCliente.Rol.Nombre }}</small>
            </div>
          </div>
          <div class="contact">
            <span class="las la-user-circle"></span>
            <span class="las la-comment"></span>
            <span class="las la-phone"></span>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Cliente",
  data() {
    return{
      usuariosClientes:[]
    }
  },
  methods:{

  },

  async created(){
    let res= await axios.get("http://127.0.0.1:8000/api/usuario_cliente");
    this.usuariosClientes=res.data.data;
    console.log(res)
  }

};
</script>
<style>
.customers{
  width: 80%;
  margin: auto;
}

.customer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.7rem;
}

.info {
  display: flex;
  align-items: center;
}

.info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.info h4 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
}

.info small {
  font-weight: 600;
  color: var(--text-grey);
}

.contact span {
  font-size: 2rem;
  display: inline-block;
  margin-left: 0.5rem;
  color: var(--main-color);
}
</style>