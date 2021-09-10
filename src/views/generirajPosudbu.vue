<template>
  <div class="posudba">
    <div class="first">
      Korisnik: {{ this.info.username }} je posudio:{{ info.naziv }} od
      {{ info.autor }} -> PDF: {{ info.pdf }}
    </div>
  </div>
</template>

<script>
import store from "./store";
export default {
  props: ["info"],
  name: "generirajPosudbu",
  data() {
    return {
      store,
      cards: [],
    };
  },
};
</script>

<style scoped>
* {
  margin: 10px;
  background: #fff;
}
.first {
  font-size: 20px;
}
</style>
