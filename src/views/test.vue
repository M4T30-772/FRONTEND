<template>
  <div>
    <generirjaCard />
  </div>
</template>

<script>
import generirajCard from "./generirajCard.vue";
export default {
  name: "test",
  component: {
    generirajCard,
  },
};
</script>

<!-- 
<generirajCard
          v-for="card in filteredCards"
          :key="card.url"
          :info="card"

          {{ info.title }}
          {{ info.description }}
        />-->
