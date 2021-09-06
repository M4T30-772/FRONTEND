<template>
  <div class="posudba">Knjiga, {{ store.userEmail }}</div>
</template>

<script>
import store from "./store";
export default {
  props: ["info"],
  name: "generirajPosudbu",
  data() {
    return {
      store,
    };
  },
};
</script>
