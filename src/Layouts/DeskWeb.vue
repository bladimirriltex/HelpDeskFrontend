<template>
  <div>
    <div class="bar-nav-container">
      <nav class="container menu">
        <div class="logo-container">
          <img
            src="@/assets/img/logo.png"
            alt=""
          />
        </div>
        <ul>
          <li><i class="las la-home"></i>Homepage</li>
          <li><i class="las la-scroll"></i>Knowled Base</li>
          <li><i class="las la-newspaper"></i><router-link to="dashboard" >News</router-link></li>
          <li><i class="las la-calendar-alt"></i>Events</li>
          <li><i class="las la-pencil-alt"></i>Page Variatons</li>
        </ul>
      </nav>
    </div>

    <div class="hero">
      <section class="hero-container container">
        <div class="hero-description">
          <h1>Welcome to our Online Helpdesk</h1>
          <p>A modern, Responsive Helpdesk</p>
        </div>
        <div class="quick-links">
          <div class="card-links">
            <div class="card-head">Quick links</div>
            <div class="card-content">
              <p>How to add profile photo</p>
            </div>
            <div class="card-content">
              <p>How to add profile photo</p>
            </div>
            <div class="card-content">
              <p>How to add profile photo</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <template>
      <router-view />
    </template>

    <section class="section-contact">
      <div class="container">
        <div class="contact-support">
          <div class="schedule">
            <h2>Contact our Support Helpdesk</h2>
            <p>You can contact us Monday - Saturday from 9:00 AM to 6:00 PM</p>
          </div>

          <div class="contacts">
            <div class="card-contact">
              <h3>General question</h3>
              <h2>View FAQs</h2>
            </div>

            <div class="card-contact">
              <h3>Contac By Phone</h3>
              <h2>+51 946 125 648</h2>
            </div>

            <div class="card-contact">
              <h3>Contact By mail</h3>
              <h2>Send us an Email</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>
          Copyright © Helpdesk - Utepinos: Baiabaia, Alejandrodx y Riltex  🗂🛠
        </p> 
      </div>
    </footer>
  </div>
</template>

<script>
</script>
<style>
.bar-nav-container {
  background-color: #593093;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.bar-nav-container .menu {
  display: flex;
  justify-content: space-around;
}

.bar-nav-container .menu ul {
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 300;
  color: #fff;
}
.bar-nav-container .menu ul li {
  padding: 5px;
  border-radius: 3px;
}

.bar-nav-container .menu ul li:hover {
  background-color: #4c2780;
  padding: 5px;
}

.logo-container {
  width: 180px;
}

.logo-container img {
  width: 100%;
}

/* #############################hero################### */

.hero {
  background-image: linear-gradient(135deg, #2ab5bb 8%, #2a7bbb);
}
.hero-container {
  height: 88vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.hero-container .hero-description {
  color: #fff;
  width: 50%;
}

.hero-container .hero-description h1 {
  font-size: 5rem;
  font-weight: 900;
}

.hero-container .hero-description p {
  font-size: 2.1rem;
  font-weight: 300;
}

.hero-container .quick-links {
  border-radius: 4px;
  width: 300px;
  background-color: #4f419b;
  overflow: hidden;
}

.hero-container .quick-links .card-head {
  background-color: #fff;
  font-size: 1.6rem;
  padding: 10px 32px;
  font-weight: bold;
  line-height: 2.2rem;
}

.hero-container .quick-links .card-content {
  color: #fff;
  font-size: 1.6rem;
  padding: 10px 32px;
  font-weight: bold;
  line-height: 2.2rem;

  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-container .quick-links .card-content:hover {
  background-color: #593093;
  color: hsla(0, 0%, 100%, 0.6);
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-contact {
  background-color: #2f6692;
  padding: 50px;
  color: #fff;
  height: 280px;
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
.contact-support .contacts .card-contact:hover {
  color: hsla(0, 0%, 100%, 0.8);
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
  font-size: 2.1rem;
  line-height: 2.3rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: none;
}

/* ##########Footer#################### */

footer {
  background-color: #0d1c25;
  font-size: 1.3rem;
  padding: 50px 65px 45px;
  color: #fff;
}
</style>