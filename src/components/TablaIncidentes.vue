<template>
    <div class="projects">
            <div class="card">
              <div class="card-header">
                <h3>Recent Projects</h3>
                <button>
                  See all <span class="las la-arrow-right"></span>
                </button>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table-dashboard" width="100%">
                    <thead>
                      <td>Projects Title</td>
                      <td>Departamento</td>
                      <td>Status</td>
                    </thead>
                    <tbody>
                      <tr>
                        <td>UI/UX Design</td>
                        <td>UI team</td>
                        <td><span class="status purple"></span> review</td>
                      </tr>
                      <tr>
                        <td>Web develoment</td>
                        <td>Frontend</td>
                        <td><span class="status pink"></span> in progress</td>
                      </tr>

                      <tr>
                        <td>Ushop app</td>
                        <td>Mobile team</td>
                        <td><span class="status orange"></span> review</td>
                      </tr>
                      <tr>
                        <td>UI/UX Design</td>
                        <td>UI team</td>
                        <td><span class="status purple"></span> review</td>
                      </tr>
                      <tr>
                        <td>Web develoment</td>
                        <td>Frontend</td>
                        <td><span class="status pink"></span> in progress</td>
                      </tr>

                      <tr>
                        <td>Ushop app</td>
                        <td>Mobile team</td>
                        <td><span class="status orange"></span> review</td>
                      </tr>
                      <tr>
                        <td>UI/UX Design</td>
                        <td>UI team</td>
                        <td><span class="status purple"></span> review</td>
                      </tr>
                      <tr>
                        <td>Web develoment</td>
                        <td>Frontend</td>
                        <td><span class="status pink"></span> in progress</td>
                      </tr>

                      <tr>
                        <td>Ushop app</td>
                        <td>Mobile team</td>
                        <td><span class="status orange"></span> review</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
export default {
    name:"TablaIncidentes"    
}
</script>
<style>
.card {
  background: #fff;
  border-radius: 5px;
}

.card-header,
.card-body {
  padding: 1rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}
.card-header button {
  background: var(--main-color);
  border-radius: 10px;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--main-color);
}

.table-dashboard {
  border-collapse: collapse;
}
thead tr {
  border-top: 1px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
}

thead td {
  font-weight: 700;
}

td {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #222;
}
td .status {
  display: inline-block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 1rem;
}
tr td:last-child {
  display: flex;
  align-items: center;
}

.status.purple {
  background-color: rebeccapurple;
}

.status.pink {
  background-color: deeppink;
}

.status.orange {
  background-color: orangered;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

</style>