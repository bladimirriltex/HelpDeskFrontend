<template>
  <div>
    <EstadisticasIncidentes />

    <router-link to="/incidentes">
      <button class="button">
        Ver todos <span class="las la-arrow-right"></span>
      </button>
    </router-link>
    <TablaIncidentes />
  </div>
</template>
<script>
import EstadisticasIncidentes from "@/components/EstadisticasIncidentes.vue";
import TablaIncidentes from "@/components/TablaIncidentes.vue";

export default {
  name: "Tablero",
  components: {
    EstadisticasIncidentes,
    TablaIncidentes,
  },
};
</script>

<style>
.button {
  background: var(--main-color);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--main-color);
  position: absolute;
  margin-top: 1rem;
  right: 5%;
}

.button:hover {
  background: #000;

  border: 1px solid #000;
  
}
</style>