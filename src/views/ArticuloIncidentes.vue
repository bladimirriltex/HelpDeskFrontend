<template>
     <section class="knowledge">
      <div class="container incidents">
        <div class="features-articles">
          <h2>Feature Articles</h2>
          <div class="card-article hvr-rotate">
            <div class="icon purple las la-user-cog"></div>

            <div class="description">
              <h2>Can't verify second user account</h2>
              <h3>View article <i class="las la-angle-right"></i></h3>
            </div>
          </div>

          <div class="card-article hvr-rotate">
            <div class="icon red las la-user-cog"></div>
            <div class="description">
              <h2>Can't verify second user account</h2>
              <h3>View article <i class="las la-angle-right"></i></h3>
            </div>
          </div>

          <div class="card-article hvr-rotate">
            <div class="icon orange las la-user-cog"></div>

            <div class="description">
              <h2>Can't verify second user account</h2>
              <h3>View article <i class="las la-angle-right"></i></h3>
            </div>
          </div>

          <div class="card-article hvr-rotate">
            <div class="icon blue las la-user-cog"></div>
            <div class="description">
              <h2>Can't verify second user account</h2>
              <h3>View article <i class="las la-angle-right"></i></h3>
            </div>
          </div>
        </div>
        <div class="recently-articles">
          <h2>Recently Update</h2>

          <div class="card-article hvr-rotate">
            <div class="icon blue las la-user-cog"></div>

            <div class="description">
              <h2>Can't verify second user account</h2>
              <h3>View article <i class="las la-angle-right"></i></h3>
            </div>
          </div>

          <div class="card-article hvr-rotate">
            <div class="icon orange las la-user-cog"></div>
            <div class="description">
              <h2>Can't verify second user account</h2>
              <h3>View article <i class="las la-angle-right"></i></h3>
            </div>
          </div>
          <div class="card-article hvr-rotate">
            <div class="icon purple las la-user-cog"></div>

            <div class="description">
              <h2>Can't verify second user account</h2>
              <h3>View article <i class="las la-angle-right"></i></h3>
            </div>
          </div>

          <div class="card-article hvr-rotate">
            <div class="icon red las la-cogs"></div>
            <div class="description">
              <h2>Can't verify second user account</h2>
              <h3>View article <i class="las la-angle-right"></i></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
</script>
<style>
.hero-container{
    height: auto;
    padding: 30px 0;
}

.knowledge {
  padding: 50px;
  background-color: #edf0f1;
}

.knowledge .incidents {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.knowledge .incidents .features-articles > h2,
.recently-articles > h2 {
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3rem;
  padding: 8px 10px;
  border-bottom: 1px solid #00000022;
  margin-bottom: 20px;
}

.knowledge .incidents .card-article {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 11%);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 300;
  height: 75px;

  display: grid;
  grid-template-columns: 75px 1fr;
  justify-items: center;
  align-items: center;

  margin-top: 25px;

  overflow: hidden;
}

.knowledge .incidents .card-article:hover {
  color: #f28023;
  text-decoration: none;
}

.knowledge .incidents .card-article .icon {
  font-size: 3.3rem;
  background-color: #2a7bbb;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.knowledge .incidents .card-article .icon.blue {
  background-color: #2a7bbb;
}
.knowledge .incidents .card-article .icon.red {
  background-color: red;
}
.knowledge .incidents .card-article .icon.orange {
  background-color: orange;
}
.knowledge .incidents .card-article .icon.purple {
  background-color: purple;
}


</style>