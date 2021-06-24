<template>
  <div>
    <NavWeb />
    <MainBienvenidos/>
    <Footer />
  </div>
</template>
<script>
import NavWeb from "@/components/NavWeb.vue";
import MainBienvenidos from "@/components/MainBienvenidos.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Bienvenidos",
  components: {
    NavWeb,
    MainBienvenidos,
    Footer,
  },
};
</script>
<style>
</style>