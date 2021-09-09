<template>
  <div class="posudba">{{ store.userEmail }} je posudio : Knjiga,</div>
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
