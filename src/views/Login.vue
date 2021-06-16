<template>
    <div class="login-container">
        <div class="login">
            <div class="img-container js-tilt">
                <img src="@/assets/img/img-01.png" alt="">

            </div>
            <form class="form-login">
                <h2>Menber Login</h2>
                <label for="email">
                    <div class="wrap-input las la-at">
                        <input type="text" name="email" id="email" placeholder="Email">
                        <span></span>
                        <span></span>
                    </div>
                </label>

                <label for="password">
                    <div class="wrap-input las la-shield-alt">
                        <input type="password" name="password" id="password" placeholder="password">
                        <span></span>
                        <span></span>
                    </div>
                </label>

                <div class="wrap-button">
                    <button> Login </button>
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
  font-family: "Lato", sans-serif;
}
.img-container img {
  width: 100%;
}

.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: linear-gradient(-135deg, #c850c0, #4158d0);
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

.login form{
    width:300px;
}

.form-login h2{
    font-family: Poppins-Bold;
    font-size:2.4rem;
    color:#333;
    text-align: center;
    padding-bottom: 5.4rem;
}

.form-login .wrap-input{
    background-color:green;
    font-size:2.2rem;
    font-weight:900;
    color:#444;
    background-color: #e6e6e6;
    height:50px;
    border-radius: 25px;
    padding: 4px 20px;
    margin: 10px 0;
    display: flex;
    justify-content:space-around;
    align-items: center;

}

.form-login .wrap-input:hover{
    color:#57b846;
    box-shadow:4px 6px 5px 0px rgb(68 226 65 / 62%);
}

.form-login .wrap-input:focus{
    color:#57b846;
    box-shadow:4px 6px 5px 0px rgb(68 226 65 / 62%);
    
}

.form-login .wrap-input input{
    outline:none;
    border:none;
    height: inherit;
    background-color: inherit;
}

.form-login .wrap-button{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
}

.form-login .wrap-button button{
    font-size: 1.5rem;
    color:#fff;
    text-transform: uppercase;
    width:100%;
    height: 50px;
    border-radius: 25px;
    background-color:#57b846;
    outline:none;
    border:none;
    font-weight: bold;
}

.form-login .wrap-button button:hover{
    background-color:#56814e;
}

</style>