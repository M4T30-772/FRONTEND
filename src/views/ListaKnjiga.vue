<template>
  <div class="main">
    <input
      class="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="store.searchTerm"
    />
    <div class="row">
      <div class="col-2"></div>
      <div class="col-7">
        <generirajCard
          v-for="card in filteredCards"
          :key="card.url"
          :info="card"
        />
      </div>
      <div class="col-3">desno {{ store.searchTerm }}</div>
    </div>
  </div>
</template>

<script>
import store from "./store.js";
import generirajCard from "./generirajCard.vue";
let cards = [];
//kartice sa koje se prikazuju na stranici
cards = [
  {
    url: "https://picsum.photos/id/1/400/400",
    title: "Gospodar prstenova",
    description: "opisujem knjugu prvuu",
    time: "a malo prije",
  },
  {
    url: "https://picsum.photos/id/2/400/400",
    title: "1899",
    description: "opisujem knjugu prvuu",
    time: "a malo prije",
  },
  {
    url: "https://picsum.photos/id/3/400/400",
    title: "Treca knjigurina",
    description: "opisujem knjugu trecu",
    time: "a malo prije",
  },
];

export default {
  name: "ListaKnjiga",
  data: function() {
    return {
      cards,
      store,
    };
  },
  computed: {
    filteredCards() {
      //search bar
      let termin = this.store.searchTerm;
      let newCards = [];
      for (let card of this.cards) {
        if (card.title.indexOf(termin) >= 0) {
          console.log("prolaz");
          newCards.push(card);
        }
      }
      return newCards;
    },
  },
  components: {
    generirajCard,
  },
};
</script>

<style scoped>
body {
  background-color: #f3ebf6;
  font-family: "Ubuntu", sans-serif;
}

.main {
  background-color: #ffffff;
  width: 900px;
  height: 600px;
  margin: 7em auto;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
}

.sign {
  padding-top: 20px;
  color: #8c55aa;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  font-size: 23px;
}

.un {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: "Ubuntu", sans-serif;
}

form.form1 {
  padding-top: 40px;
}

.pass {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: "Ubuntu", sans-serif;
}

.un:focus,
.pass:focus {
  border: 2px solid rgba(0, 0, 0, 0.18) !important;
}

.submit {
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  background: linear-gradient(to right, #9c27b0, #e040fb);
  border: 0;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: "Ubuntu", sans-serif;
  margin-left: 35%;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
}

.forgot {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #e1bee7;
  padding-top: 15px;
}

a {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #e1bee7;
  text-decoration: none;
}

@media (max-width: 600px) {
  .main {
    border-radius: 0px;
  }
}
</style>
