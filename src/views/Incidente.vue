<template>
  <div class="card-incidente">
    {{ this.dataIncidente.id }} -{{ this.dataIncidente.Nombre}}
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    incidente: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
        dataIncidente:{}
    };
  },
  methods: {},

  async created() {
    let res = await axios.get("http://127.0.0.1:8000/api/incidente/"+this.incidente);
    console.log(res);
    this.dataIncidente=res.data.data;
    console.log(this.dataIncidente);
  },
};
</script>
<style>
</style>