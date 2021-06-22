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

          <li class="nav-item">
            <router-link to="/Login" class="nav-link">SIGN IN</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Registracija" class="nav-link"
              >REGISTRACIJA</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/test" class="nav-link">test</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">LOGOUT</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <router-view />
  </div>
</template>

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
  border-bottom: solid;
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
  text-decoration: none;
  color: linear-gradient(to right, #9c27b0, #e040fb);
}
.nav-item {
  font-size: 24px;
}
</style>
