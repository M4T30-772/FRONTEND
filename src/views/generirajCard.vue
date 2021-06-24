<template>
  <div class="card" style="width: 15rem;">
    <h5 class="card-title">{{ info.Naziv }}</h5>
    <img class="card-body p-0" :src="info.Url" />
    <div class="card-body">
      <p class="card-text">{{ info.Knjizevni_Rod }},{{ info.Desc }}</p>
      <a href="#" class="btn btn-primary">Posudi</a>
    </div>
  </div>
</template>

<script>
import ListaKnjiga from "./ListaKnjiga.vue";
export default {
  props: ["info"],
  name: "generirajCard",
};
</script>
