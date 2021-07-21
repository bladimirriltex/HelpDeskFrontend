<template>
  <div>
    <button @click="show()">modal</button>
    <modal name="my-first-modal" > This is my first modal </modal>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  methods: {
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
  },
  mount() {
    this.show();
  },
};
</script>