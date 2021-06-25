<template>
  <div class="login-container">
    <div class="login">
      <div class="img-container js-tilt"></div>
      <form class="form-login">
        <h2>Iniciar Sesion</h2>
        <label for="email">
          <div class="wrap-input las la-at">
            <input type="text" name="email" id="email" placeholder="Correo" />
            <span></span>
            <span></span>
          </div>
        </label>

        <label for="password">
          <div class="wrap-input las la-shield-alt">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
            />
            <span></span>
            <span></span>
          </div>
        </label>

        <div class="wrap-button">
          <button>Ingresar </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
</script>
<style>
/*font-family:poppins*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "Lato";
}
.login {
  background-image: url("../assets/img/portada-utp-login.webp");
  background-size: cover;
  background-repeat: none;
  position: relative;
}
.img-container img {
  width: 60%;
}

.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-image: linear-gradient(
    to right top,
    #b50d30,
    #87122d,
    #5a1325,
    #301119,
    #000000
  );
}

.login-container .login {
  width: 80%;
  height: 80%;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  background-color: #fff;
}

.login-container .login .img-container {
  width: 315px;
}

.login form {
  
 background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='346.41' height='300' viewBox='0 0 34.64101615137755 30' patternUnits='userSpaceOnUse' patternTransform='rotate(53)'%3E%3Crect width='100%25' height='100%25' fill='rgba(255, 245, 245,1)'/%3E%3Cpath d='M-20-20h200v200h-200M30.74 27.25L25.98 24.5L21.22 27.25L21.22 32.75L25.98 35.5L30.74 32.75zM13.42 27.25L8.66 24.5L3.9 27.25L3.9 32.75L8.66 35.5L13.42 32.75zM4.76 12.25L0 9.5L-4.76 12.25L-4.76 17.75L0 20.5L4.76 17.75zM13.42-2.75L8.66-5.5L3.9-2.75L3.9 2.75L8.66 5.5L13.42 2.75zM30.74-2.75L25.98-5.5L21.22-2.75L21.22 2.75L25.98 5.5L30.74 2.75zM39.4 12.25L34.64 9.5L29.88 12.25L29.88 17.75L34.64 20.5L39.4 17.75zM22.08 12.25L17.32 9.5L12.56 12.25L12.56 17.75L17.32 20.5L22.08 17.75z' fill='rgba(254, 215, 215,1)'/%3E%3Cpath d='M-20-20h200v200h-200M27.04 26.5L20.98 23L14.92 26.5L14.92 33.5L20.98 37L27.04 33.5zM9.72 26.5L3.66 23L-2.4 26.5L-2.4 33.5L3.66 37L9.72 33.5zM1.06 11.5L-5 8L-11.06 11.5L-11.06 18.5L-5 22L1.06 18.5zM9.72-3.5L3.66-7L-2.4-3.5L-2.4 3.5L3.66 7L9.72 3.5zM27.04-3.5L20.98-7L14.92-3.5L14.92 3.5L20.98 7L27.04 3.5zM35.7 11.5L29.64 8L23.58 11.5L23.58 18.5L29.64 22L35.7 18.5zM44.36 26.5L38.3 23L32.24 26.5L32.24 33.5L38.3 37L44.36 33.5zM18.38 41.5L12.32 38L6.26 41.5L6.26 48.5L12.32 52L18.38 48.5zM-7.6 26.5L-13.66 23L-19.72 26.5L-19.72 33.5L-13.66 37L-7.6 33.5zM-7.6-3.5L-13.66-7L-19.72-3.5L-19.72 3.5L-13.66 7L-7.6 3.5zM18.38-18.5L12.32-22L6.26-18.5L6.26-11.5L12.32-8L18.38-11.5zM44.36-3.5L38.3-7L32.24-3.5L32.24 3.5L38.3 7L44.36 3.5zM35.7 41.5L29.64 38L23.58 41.5L23.58 48.5L29.64 52L35.7 48.5zM1.06 41.5L-5 38L-11.06 41.5L-11.06 48.5L-5 52L1.06 48.5zM-16.26 11.5L-22.32 8L-28.38 11.5L-28.38 18.5L-22.32 22L-16.26 18.5zM1.06-18.5L-5-22L-11.06-18.5L-11.06-11.5L-5-8L1.06-11.5zM35.7-18.5L29.64-22L23.58-18.5L23.58-11.5L29.64-8L35.7-11.5zM53.02 11.5L46.96 8L40.9 11.5L40.9 18.5L46.96 22L53.02 18.5zM18.38 11.5L12.32 8L6.26 11.5L6.26 18.5L12.32 22L18.38 18.5z' fill='rgba(203, 213, 224,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");

  background-color: #fff;
  height: 100%;
  width: 40%;
  padding: 100px 30px;
  position: absolute;
  right: 0;
}

.form-login h2 {
  font-size: 2.4rem;
  color: #333;
  text-align: center;
  padding-bottom: 5.4rem;
}

.form-login .wrap-input {
  max-width: 400px;
  width: 350px;
  background-color: green;
  font-size: 2.2rem;
  font-weight: 900;
  color: #444;
  background-color: #f7f7f7;
  height: 50px;
  border-radius: 25px;
  padding: 4px 20px;
  margin: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.form-login .wrap-input:hover {
  color: #252222;
  box-shadow: 4px 6px 5px 0px rgb(62 72 62 / 62%);
  transition: 0.4s ease-in;
}

.form-login .wrap-input:focus {
  color: #57b846;
  box-shadow: 4px 6px 5px 0px rgb(68 226 65 / 62%);
}

.form-login .wrap-input input {
  outline: none;
  border: none;
  height: inherit;
  background-color: inherit;
}

.form-login .wrap-input input:focus::placeholder {
  color: transparent;
}

.form-login .wrap-button {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  padding-top: 20px;
}

.form-login .wrap-button button {
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
  width: 350px;
  height: 50px;
  border-radius: 25px;
  background-color: #c42525;
  outline: none;
  border: none;
  font-weight: bold;
}

.form-login .wrap-button button:hover {
  background-color: #181a17;
  transition: 0.7s ease-in;
}
</style>