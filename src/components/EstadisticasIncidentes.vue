<template>
  <div class="cards">
    <div class="card-single">
      <div>
        <h1>{{this.incidenteSinResolverPorDia}}</h1>
        <span>Incidentes sin resolver</span>
      </div>
      <div>
        <span class="las la-bomb"></span>
      </div>
    </div>

    <div class="card-single">
      <div>
        <h1>{{this.incidenteResueltosPorDia}}</h1>
        <span>incidentes resueltos</span>
      </div>
      <div>
        <span class="las la-check-circle" style="color: #22da22"></span>
      </div>
    </div>

    <div class="card-single">
      <div>
        <h1>{{this.incidentePorDia}}</h1>
        <span>Incidentes/día</span>
      </div>
      <div>
        <span class="las la-bug" style="color: #0000009e"></span>
      </div>
    </div>

    <div class="card-single">
      <div>
        <h1>{{this.incidentesTotales}}</h1>
        <span>Total de incidentes resueltos</span>
      </div>
      <div>
        <span class="las la-tools"></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EstadisticasIncidentes",
  data() {
    return {
      incidentePorDia: 0,
      incidenteSinResolverPorDia: 0,
      incidenteResueltosPorDia: 0,
      incidentesTotales: 0,
    };
  },
  async created() {
    let res= await axios.get("totalIncidentes")
    let res1= await axios.get("sinresolverIncidentes")
    let res2= await axios.get("resueltosIncidentes")
    let res3= await axios.get("deldiaIncidentes")
    console.log(res,res1,res2,res3)
  console.log(res.data[0].totalIncidentes)
  this.incidentesTotales=res.data[0].totalIncidentes;
  this.incidenteSinResolverPorDia=res1.data[0].sinresolverIncidentes;
  this.incidenteResueltosPorDia=res2.data[0].resueltosIncidentes;
  this.incidentePorDia=res3.data[0].deldiaIncidentes;

    
  },
};
</script>
<style>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.card-single {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 2rem;
  border-radius: 2px;
}

.card-single div:last-child span {
  font-size: 4rem;
  color: var(--main-color);
}

.card-single div:first-child span {
  color: var(--text-grey);
}

.card-single:last-child {
  background-color: var(--main-color);
}

.card-single:last-child h1,
.card-single:last-child div:first-child span,
.card-single:last-child div:last-child span {
  color: #fff;
}
</style>