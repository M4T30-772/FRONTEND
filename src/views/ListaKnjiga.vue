<template>
  <div class="main" inline-block>
    <input
      class="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="store.searchTerm"
    />
    <!-- za trazit uredi!! -->
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
import { db } from "./firebase";
let a = 5;
//let cards = [];

export default {
  name: "ListaKnjiga",
  data: function() {
    return {
      cards: [],
      store,
    };
  },
  //pokaze se cim otvorimo home
  mounted() {
    this.getPosts();
  },

  methods: {
    getPosts() {
      console.log("firebase dohvat");
      db.collection("posts")
        .get()
        .then((query) => {
          this.cards = [];

          fetch("http://localhost:3000/knjige")
            .then((r) => {
              return r.json();
            })
            .then((data) => {
              console.log("podatci sa backenda", data);
              let data2 = data.map((element) => {
                return {
                  id: element.id,
                  Autor: element.Autor,
                  Naziv: element.Naziv,
                  Url: element.Url,
                  Desc: element.Desc,
                  Knjizevni_Rod: element.Knjizevni_Rod,
                  Datum: element.Datum,
                };
              });
              this.cards = data2;
            });

          //         query.forEach((doc) => {
          //         console.log("ID", doc.id);
          //       console.log("Podatci", doc.data());

          //     this.cards.push({
          //     id: doc.id,
          //   posted_at: doc.posted_at,
          // desc: doc.desc,
          // url: doc.url,
          // email: doc.email,
          //  });
          //  });
        });
    },
  },
  computed: {
    filteredCards() {
      //search bar
      let termin = this.store.searchTerm;
      let newCards = [];
      for (let card of this.cards) {
        if (card.Desc.indexOf(termin) >= 0) {
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
  width: 1500px;
  height: 760px;
  margin: 3em auto;
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
