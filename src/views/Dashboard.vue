<template>
  <div>
    <div class="cardBox">
      <div class="card">
        <div>
          <div class="cardName">Broj knjiga</div>
          <div class="numbers">9</div>
        </div>
        <div class="iconBox">
          <i class="fa fa-book" aria-hidden="true"></i>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="cardName">Korisnici</div>
          <div class="numbers">10</div>
        </div>
        <div class="iconBox">
          <i class="fa fa-users" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="recentOrders">
        <div card="headers">
          <h2><b>POSUĐENE KNJIGE</b></h2>
          <p></p>
          <p></p>
          <div class="skup">
            <generiraj-posudbu
              v-for="card in filteredCards"
              :key="card._id"
              :info="card"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.recentOrders {
  background-color: #fff;
  margin: 30px;
}
h2 {
  text-align: center;
}
h3 {
  text-align: center;
}
.cardBox {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
.cardBox .card {
  position: relative;
  background: #fff;
  font-size: 2em;
  font-weight: 500;
  justify-content: space-between;
  cursor: pointer;
}
.cardBox .card .number {
  position: relative;
  font-size: 2em;
  font-weight: 500;
}
.cardBox .card .cardName {
  color: #999;
}
.cardBox .card .iconBox {
  font-size: 2.5em;
  color: #03a9f4;
}
.details {
  margin: 0;
}
</style>

<script>
import generirajPosudbu from "./generirajPosudbu.vue";

import store from "./store";
export default {
  components: { generirajPosudbu },
  name: "Dashboard",
  data() {
    return {
      store,
      cards: [],
    };
  },
  mounted() {
    this.getDashboard();
  },
  methods: {
    getDashboard() {
      fetch("http://localhost:3000/dashboard")
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          console.log("podatci sa backenda", data);
          let data2 = data.map((element) => {
            return {
              id: element._id,
              autor: element.autor,
              naziv: element.naziv,
              username: element.username,
              pdf: element.pdf,
            };
          });
          this.cards = data2;
        });
    },
  },
  computed: {
    filteredCards() {
      //search bar
      let termin = this.store.searchTerm;
      let newCards = [];
      for (let card of this.cards) {
        if (card.id.indexOf(termin) >= 0) {
          console.log("prolaz");
          newCards.push(card);
        }
      }
      return newCards;
    },
  },
};
</script>
