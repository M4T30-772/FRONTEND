<template>
  <div class="card" style="width: 18rem;">
    <h5 class="card-title">{{ info.title }}</h5>
    <img class="card-body p-0" />
    <div class="card-body">
      <p class="card-text">asdasdasd</p>
      <a href="#" class="btn btn-primary">Posudi</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "generirajCard",
};
</script>
