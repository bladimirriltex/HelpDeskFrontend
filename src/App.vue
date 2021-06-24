<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

html {
  font-size: 62.5%;
}
/* img {
  width: 100%;
} */
ul {
  list-style: none;
}
a {
  color: #000;
  text-decoration: none;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
