<template>
    <div class="cards">
          <div class="card-single">
            <div>
              <h1>54</h1>
              <span>Incidentes por día</span>
            </div>
            <div>
              <span class="las la-users"></span>
            </div>
          </div>

          <div class="card-single">
            <div>
              <h1>79</h1>
              <span>incidentes resueltos del día</span>
            </div>
            <div>
              <span class="las la-clipboard"></span>
            </div>
          </div>

          <div class="card-single">
            <div>
              <h1>124</h1>
              <span>Orders</span>
            </div>
            <div>
              <span class="las la-shopping-bag"></span>
            </div>
          </div>

          <div class="card-single">
            <div>
              <h1>$6K</h1>
              <span>Income</span>
            </div>
            <div>
              <span class="lab la-google-wallet"></span>
            </div>
          </div>
        </div>
</template>

<script>
export default{
    name:"EstadisticasIncidentes"
}
</script>
<style>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 1rem;
}

.card-single {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 2rem;
  border-radius: 2px;
}

.card-single div:last-child span {
  font-size: 3rem;
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