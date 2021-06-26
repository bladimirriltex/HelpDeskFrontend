<template>
  <div>
    <NavWeb />
    <template>
      <router-view />
    </template>
    <Footer />
  </div>
</template>

<script>
import NavWeb from "@/components/NavWeb.vue";

import Footer from "@/components/Footer.vue";

export default {
  name: "DeskWeb",
  components: {
    NavWeb,
    Footer,
  },
};
</script>
<style>
:root {
  --red-utp: #b50d30;
  --black: #000;
  --white: #fff;
}
</style>