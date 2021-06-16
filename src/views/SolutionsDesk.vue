<template>
    <main class="main container">
      <div class="card knowled hvr-float">
        <img src="@/assets/img/base.png" alt="" />
        <h2>Knowledge Base</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          nesciunt.
        </p>
      </div>

      <div class="card faqs hvr-float">
        <img src="@/assets/img/question.png" alt="" />
        <h2>FAQs</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          nesciunt.
        </p>
      </div>

      <div class="card more-questions hvr-float">
        <img src="@/assets/img/sms.png" alt="" />
        <h2>More Questions?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          nesciunt.
        </p>
      </div>
    </main>
</template>
<script>
</script>
<style >
.hero-container{
    height: 230px;
}

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

/* main .card:hover {
  transform: rotateX(0deg) rotateY(20deg) rotateZ(0deg);
  color: hsla(0, 0%, 100%, 0.8);
  text-decoration: none;
} */

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
  background-color: #2f6692;
}

.main .faqs {
  background-color: #593093;
}

.main .more-questions {
  background-color: #24bd85;
}

</style>