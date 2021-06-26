<template>
  <div>
    <HeroLayout  />
    <main class="main container">
      <div class="card knowled float">
        <img src="@/assets/img/base.png" alt="" />
        <h2>Knowledge Base</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          nesciunt.
        </p>
      </div>

      <div class="card faqs float">
        <img src="@/assets/img/question.png" alt="" />
        <h2>FAQs</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          nesciunt.
        </p>
      </div>

      <div class="card more-questions float">
        <img src="@/assets/img/sms.png" alt="" />
        <h2>More Questions?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          nesciunt.
        </p>
      </div>
    </main>
  </div>
</template>
<script>
import HeroLayout from "@/components/HeroLayout.vue";
export default{
  name:"SolucionesDesk",
  components:{
    HeroLayout, 
  },
}
</script>

<style >


.main {
  padding: 50px;
  display: flex;
  justify-content: space-around;
  gap: 20px;
}
.main .card {
  color: #fff;
  padding: 60px 40px;
  width: 300px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  cursor: pointer;
}

.main .card img {
  width: 50px;
  height: 50px;
}

.main .card h2 {
  font-size: 2.2rem;
  font-weight: 300;
}
.main .card p {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 300;
}

.main .knowled {
  background-color: #d01a49;
}

.main .faqs {
  background-color: #000;
}

.main .more-questions {
  background-color: #d01a49;
}


.float {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.float:hover, .float:focus, .float:active {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
}
</style>