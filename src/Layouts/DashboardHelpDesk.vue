<template>
  <div class="">
    <input type="checkbox" id="nav-toggle" />
    <div class="sidebar">
      <div class="sidebar-brand">
        <h2><span class="lab la-accusoft"></span><span>Accusoft</span></h2>
      </div>

      <div class="sidebar-menu">
        <ul>
          <li>
            <a href="" class="active"
              ><span class="las la-igloo"></span><span>Dashboard</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-users"></span><span>Customers</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-clipboard-list"></span
              ><span>Projects</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-shopping-bag"></span><span>Orders</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-receipt"></span><span>Inventory</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-user-circle"></span><span>Accounts</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="las la-clipboard-list"></span><span>Tasks</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="main-content">
      <header>
        <h3>
          <label for="nav-toggle">
            <span class="las la-bars"></span>
          </label>
          Dashboard
        </h3>

        <div class="search-wrapper">
          <span class="las la-search"></span>
          <input type="search" placeholder="Search here" />
        </div>

        <div class="user-wrapper">
          <img
            src="../assets/img/person.jpg"
            width="40px"
            height="30px"
            alt=""
          />
          <div>
            <h4>John Doe</h4>
            <small>Super Admin</small>
          </div>
        </div>
      </header>

      <main class="main-dashboard">
        <div class="cards">
          <div class="card-single">
            <div>
              <h1>54</h1>
              <span>Customers</span>
            </div>
            <div>
              <span class="las la-users"></span>
            </div>
          </div>

          <div class="card-single">
            <div>
              <h1>79</h1>
              <span>Projects</span>
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

        <div class="recent-grid">
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

          <div class="customers">
            <div class="card">
              <div class="card-header">
                <h3>New Customers</h3>
                <button>
                  See all <span class="las la-arrow-right"></span>
                </button>
              </div>
              <div class="card-body">
                <div class="customer">
                  <div class="info">
                    <img
                      src="../assets/img/person.jpg"
                      width="40px"
                      height="40px"
                    />
                    <div class="">
                      <h4>Lewis 5. cumeus</h4>
                      <small>CEO Excerpt</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>

                <div class="customer">
                  <div class="info">
                    <img
                      src="../assets/img/person.jpg"
                      width="40px"
                      height="40px"
                    />
                    <div class="">
                      <h4>Lewis 5. cumeus</h4>
                      <small>CEO Excerpt</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>

                <div class="customer">
                  <div class="info">
                    <img
                      src="../assets/img/person.jpg"
                      width="40px"
                      height="40px"
                    />
                    <div class="">
                      <h4>Lewis 5. cumeus</h4>
                      <small>CEO Excerpt</small>
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
        </div>
      </main>
    </div>
  </div>
</template>

<script scope>
export default {};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

:root {
  --main-color: #dd2f6e;
  --color-dark: #1d2231;
  --text-grey: #8390a2;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

img {
  object-fit: cover;
}

.sidebar {
  width: 345px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--main-color);
  z-index: 100;
  transition: width 300ms;
}

.sidebar-brand {
  height: 98px;
  padding-left: 1rem 0rem 1rem 2rem;
  color: #fff;
}
.sidebar-brand span {
  display: inline-block;
  padding-right: 1rem;
}

.sidebar-menu {
  margin-top: 1rem;
}

.sidebar-menu li {
  width: 100%;
  margin-bottom: 1.7rem;
  padding-left: 2rem;
}

.sidebar-menu a {
  padding-left: 1rem;
  display: block;
  color: #fff;
  font-size: 1.1rem;
}

.sidebar-menu a.active {
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--main-color);
  border-radius: 30px 0 0 30px;
}

.sidebar-menu a span:first-child {
  font-size: 1.5rem;
  padding-right: 1rem;
}

#nav-toggle:checked + .sidebar {
  width: 70px;
}

#nav-toggle:checked + .sidebar .sidebar-brand,
#nav-toggle:checked + .sidebar li {
  padding-left: 1rem;
  text-align: center;
}
#nav-toggle:checked + .sidebar li a {
  padding-left: 0rem;
}

#nav-toggle:checked + .sidebar .sidebar-brand h2 span:last-child,
#nav-toggle:checked + .sidebar li a span:last-child {
  display: none;
}

#nav-toggle:checked ~ .main-content {
  margin-left: 70px;
}
#nav-toggle:checked ~ .main-content header {
  width: calc(100% - 70px);
  left: 70px;
}

.main-content {
  transition: margin-left 300ms;
  margin-left: 345px;
}

header {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 345px;
  width: calc(100% - 345px);
  top: 0;
  z-index: 100;
  transition: left 300ms;
}

#nav-toggle {
  display: none;
}

header h3 {
  color: #222;
}

header label span {
  font-size: 1.7rem;
}

.search-wrapper {
  border: 1px solid #ccc;
  border-radius: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
}
.search-wrapper span {
  display: inline-block;
  padding: 0rem 1rem;
  font-size: 1.5rem;
}

.search-wrapper input {
  height: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;
}

.user-wrapper {
  display: flex;
  align-items: center;
}

.user-wrapper img {
  border-radius: 50%;
  margin-right: 1rem;
}

.user-wrapper small {
  display: inline-block;
  color: var(--text-grey);
}

.main-dashboard {
  margin-top: 85px;
  padding: 2rem 1.5rem;
  background: #f1f5f9;
  min-height: calc(100vh - 90px);
}

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

.recent-grid {
  margin-top: 3.5rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 70% auto;
}

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
  border-radius: 50%;
  margin-right: 1rem;
}

.info h4 {
  font-size: 0.8rem;
  font-weight: 700;
  color: #222;
}

.info small {
  font-weight: 600;
  color: var(--text-grey);
}

.contact span {
  font-size: 1.2rem;
  display: inline-block;
  margin-left: 0.5rem;
  color: var(--main-color);
}

@media only screen and (max-width: 960px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }

  .recent-grid {
    grid-template-columns: 60% 40%;
  }
}

@media only screen and (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .recent-grid {
    grid-template-columns: 100%;
  }

  .search-wrapper {
    display: none;
  }

  .sidebar {
    left: -100% !important;
  }

  header h3 {
    display: flex;
    align-items: center;
  }

  header h3 label {
    display: inline-block;
    background-color: var(--main-color);
    padding-left: 0rem;
    margin-right: 1rem;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center !important;
  }

  header h3 span {
    text-align: center;
    padding-right: 0rem;
  }

  header h3 {
    font-size: 1rem;
  }

  .main-content {
    width: 100%;
    margin-left: 0rem;
  }

  header {
    width: 100% !important;
    left: 0 !important;
  }

  #nav-toggle:checked + .sidebar {
    left: 0 !important;
    z-index: 100;
    width: 345px;
  }

  #nav-toggle:checked + .sidebar .sidebar-brand,
  #nav-toggle:checked + .sidebar li {
    padding-left: 2rem;
    text-align: left;
  }
  #nav-toggle:checked + .sidebar li a {
    padding-left: 1rem;
  }

  #nav-toggle:checked + .sidebar .sidebar-brand h2 span:last-child,
  #nav-toggle:checked + .sidebar li a span:last-child {
    display: inline;
  }

  #nav-toggle:checked ~ .main-content {
    margin-left: 0rem !important;
  }
}

@media only screen and (max-width: 560px) {
  .cards {
    grid-template-columns: 100%;
  }
}
</style>
