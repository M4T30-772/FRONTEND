<template>
  <div class="card">
    <h5 class="card-title">{{ info.Naziv }}</h5>
    <img class="card-body" :src="info.Url" />
    <div class="card-body">
      <p class="card-text">{{ info.Knjizevni_Rod }},{{ info.Desc }}</p>
      <a @click="posudi()" class="button">Posudi</a>
    </div>
  </div>
</template>

<script>
let brojac = 0;
export default {
  props: ["info"],
  name: "generirajCard",
  data() {
    return {};
  },
  methods: {
    posudi() {
      {
        {
          //napuni u bazi posudbu??
        }
      }
    },
  },
};
</script>

<style>
.card-title {
  font-size: 30px;
  text-align: center;
}
.card-body {
  font-size: 18px;
  text-align: left;
}
.card-body {
  border-radius: 30px;
}
.card {
  margin: 10px;
}
.button {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.button {
  color: #fff;
  background-color: #003147;
  border-color: #003147;
}
</style>
