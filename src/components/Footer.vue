<template>
  <div>
    <section class="section-contact">
      <div class="container">
        <div class="contact-support">
          <div class="schedule">
            <h2>Contacte con nuestro Soporte de la Mesa de Ayuda</h2>
            <p>
              Usted puede contactarnos de Lunes a Sabado desde 9:00 AM hasta
              6:00 PM
            </p>
          </div>

          <div class="contacts">
            <div class="card-contact">
              <h3>Pregunta General</h3>
              <h2><a href="Faq.html"  >Ver Preguntas Frecuentes</a></h2>
            </div>

            <div class="card-contact">
              <h3>Contacto vía Telefónica</h3>
              <h2>+51 946 125 648</h2>
            </div>

            <div class="card-contact">
              <h3>Contacto vía Correo</h3>
              <h2>Envíanos un Correo</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>
          Copyright © Helpdesk - Utepinos: BaiaBaia, Alejandrodx y Riltex 🗂🛠
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
    name:"Footer"
    
}
</script>
<style>
.section-contact {
  background-color: #000;
  padding: 50px;
  color: #fff;
  height: 280px;
  padding: 30px 0;
}

.contact-support .schedule h2 {
  font-size: 3.9rem;
  font-weight: 700;
  line-height: 3rem;
}

.contact-support .schedule p {
  margin-top: 12px;
  margin-bottom: 40px;
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 3rem;
}

.contact-support .contacts {
  display: flex;
  float: left;
}

.contact-support .contacts .card-contact {
  width: 300px;
  border-radius: 3px;
  background-color: hsla(0, 0%, 100%, 0.1);
  margin-right: 30px;
  padding: 14px 12px;
  cursor: pointer;
}

.contact-support .contacts .card-contact h2 a{
  color: #fff;
  text-decoration: none;
}

.contact-support .contacts .card-contact:hover {
  color: hsla(0, 5%, 80%, 0.8);
  text-decoration: none;
  border:1px solid #fff;
}

.contact-support .contacts .card-contact h2 a:hover{
  color: hsla(0, 5%, 80%, 0.8);
  text-decoration: none;
}

.contact-support .contacts .card-contact h3 {
  opacity: 0.6;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.contact-support .contacts .card-contact h2 {
  margin-top: 6px;
  opacity: 1;
  font-size: 2rem;
  line-height: 2.3rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: none;
}

/* ##########Footer#################### */

footer {
  background-color: #24292e;
  font-size: 1.3rem;
  padding: 50px 65px 45px;
  color: #fff;
}
</style>