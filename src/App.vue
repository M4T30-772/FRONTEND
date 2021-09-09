<template>
  <div id="conteiner">
    <link rel="stylesheet" href="path/to/bootstrap/css/bootstrap.min.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
      crossorigin="anonymous"
    />

    <div id="navigation">
      <ul>
        <li>
          <span class="icon"
            ><i class="fa fa-book" aria-hidden="true"></i
          ></span>
          <router-link to="/ListaKnjiga" class="a">
            <span class="title"><h2>Librum</h2></span>
          </router-link>
        </li>
        <li>
          <span class="icon"
            ><i class="fa fa-home" aria-hidden="true"></i
          ></span>
          <router-link to="/Home" class="a">
            <span class="title">Home</span>
          </router-link>
        </li>
        <li>
          <span class="icon"
            ><i class="fa fa-dashboard" aria-hidden="true"></i
          ></span>
          <router-link to="/Dashboard" class="a">
            <span class="title">Dashboard</span>
          </router-link>
        </li>

        <li>
          <span class="icon"
            ><i class="fa fa-book" aria-hidden="true"></i
          ></span>
          <router-link to="/ListaKnjiga" class="a">
            <span class="title">Lista Knjiga</span>
          </router-link>
        </li>

        <li>
          <span class="icon"
            ><i class="fa fa-upload" aria-hidden="true"></i
          ></span>
          <router-link to="/NovaKnjiga" class="a">
            <span class="title">Nova Knjiga</span>
          </router-link>
        </li>
        <li v-if="!auth.authenticated">
          <span class="icon"
            ><i class="fa fa-sign-in" aria-hidden="true"></i
          ></span>
          <router-link to="/Login" class="a">
            <span class="title">Login</span>
          </router-link>
        </li>
        <li v-if="!auth.authenticated">
          <span class="icon"
            ><i class="fa fa-address-card" aria-hidden="true"></i
          ></span>
          <router-link v-if="!auth.authenticated" to="/Register" class="a">
            <span class="title">Register</span>
          </router-link>
        </li>
        <li v-if="auth.authenticated">
          <span class="icon"
            ><i class="fa fa-sign-out" aria-hidden="true"></i
          ></span>
          <router-link to="/" class="a">
            <span @click="logout()" class="title">Signout</span>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="toolbar">
      <div class="topbar">
        <div class="search">
          <label>
            <input
              v-model="store.searchTerm"
              type="text"
              placeholder=" Search"
            />
            <i class="fa fa-search" aria-hidden="true"> </i>
          </label>
        </div>
        <div class="user"><img src="~@/assets/default.png" /></div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
//provjera dali je user prijavljen
import store from "./views/store.js";
import router from "@/router";
import generirajCard from "./views/generirajCard.vue";
import { Auth } from "@/services/index.js";
export default {
  methods: {
    logout() {
      Auth.logout();
      this.$router.go();
    },
  },
  data: function() {
    return {
      store,
      auth: Auth.state,
    };
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  overflow-x: hidden;
}
.conteiner {
  position: relative;
  width: 100%;
}
#navigation {
  position: fixed;
  width: 300px;
  height: 100%;
  background: #003147;
  transition: 0.5s;
  overflow: hidden;
}
#navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
#navigation ul li {
  position: relative;
  width: 100%;
  list-style: none;
}
#navigation ul li:hover {
  background: #03a9f4;
}
#navigation ul li:nth-child(1) {
  margin-bottom: 20px;
}
#navigation ul li:nth-child(1):hover {
  background: transparent;
}
#navigation ul li {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
}
#navigation .a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
}
#navigation ul li .icon {
  position: relative;
  display: block;
  min-width: 60px;
  line-height: 60px;
  text-align: center;
}
#navigation ul li .icon .fa {
  font-size: 24px;
  color: #fff;
}
#navigation ul li .a .title {
  position: relative;
  display: block;
  padding: 0, 10px;
  line-height: 60px;
  white-space: nowrap;
}
/* Desno od navbara - SEARCH -  */
.toolbar {
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  background: #f5f5f5;
  transition: 0.5s;
}
.toolbar .active {
  width: calc(100%-60px);
  left: 60px;
}
.toolbar .topbar {
  width: 100%;
  background: #fff;
  height: 60px;
  padding: 0 10 px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toggle {
  position: relative;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.toggle::before {
  content: "\f0c9";
  font-family: fontAwesome;
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 60px;
  font-size: 24;
  text-align: center;
  color: #111;
}
.search {
  position: relative;

  width: 400px;
  margin: 0 10px;
}
.search .label {
  position: relative;
  width: 100%;
}
.search label input {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  padding: 5px 20px;
  padding-left: 35px;
  margin-left: 10px;
  outline: none;
  border: 1px soid #111;
}
.search {
  position: relative;
  width: 400px;
  margin: 0 10px;
}
.search .label {
  position: relative;
  width: 100%;
}
.search label input {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  padding: 5px 20px;
  padding-left: 35px;
  outline: none;
  border: 1px solid #111;
}
.search label .fa {
  position: absolute;
  left: 15px;
  top: 11px;
  margin-left: 10px;
}

.user {
  position: relative;
  min-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.user img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
