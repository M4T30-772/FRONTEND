<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <div class="navbar">
      <img src="@/assets/liber.jpg" class="logo" />
      <nav>
        <ul>
          <li class="nav-item">
            <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ListaKnjiga" class="nav-link"
              >LISTA KNJIGA</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/UnosKnjiga" class="nav-link"
              >UNOS KNJIGA</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/Pisci" class="nav-link">Pisci</router-link>
          </li>

          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/Login" class="nav-link">SIGN IN</router-link>
          </li>
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/Registracija" class="nav-link"
              >REGISTRACIJA</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/test" class="nav-link">test</router-link>
          </li>

          <li v-if="store.currentUser" class="lo">
            <a @click.prevent="logout()" class="nav-link">LOGOUT</a>
          </li>
        </ul>
      </nav>
    </div>

    <router-view />
  </div>
</template>

<script>
//provjera dali je user prijavljen
import store from "./views/store.js";
import { firebase } from "./views/firebase";
import router from "@/router";
firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    console.log("Korinik je prijavljen u sustav: ", user.email);
    store.currentUser = user.email;
    if (!currentRoute.meta.needsUser) {
      router.push({ name: "Home" });
    }
  } else {
    console.log("Korisnik nije prijavljen");
    store.currentUser = null;

    if (currentRoute.meta.needsUser) {
      router.push({ name: "Login" });
    }
  }
});

export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.push({ login }));
    },
  },
  data: function() {
    return {
      store,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  width: 100%;
  background-image: url("~@/assets/background.png");
  background-position: center;
  background-size: cover;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  position: relative;
}
.navbar {
  width: 100%;
  height: 15vh;
  margin: auto;
  display: flex;
  align-items: center;
}
.logo {
  width: 160px;
  cursor: pointer;
}
nav {
  flex: 1;
  padding-left: 60px;
}
nav ul li {
  display: inline-block;
  list-style: none;
  margin: 0px 20px;
}
nav ul li a {
  color: #9c27b0;
}
.nav-item {
  font-size: 22px;
}
.lo {
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
</style>
