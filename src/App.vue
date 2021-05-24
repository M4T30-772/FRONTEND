<template>
  <div id="app">
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <div id="header">
      <h2>ONLINE KNJIŽNICA LIBER</h2>
      <p id="small">Gdje živi znanje</p>
    </div>
    <div id="nav">
      <nav class="navbar navbar-expand-lg " style="background-color: #e3f2fd;">
        <a class="navbar-brand" href="#">Knjižnica </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
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
              <router-link to="/Login" class="nav-link">LOGIN</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Registracija" class="nav-link"
                >REGISTRACIJA</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">LOGOUT</router-link>
            </li>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ebebeb;
}

#nav {
  padding: 15px;
  margin-top: 5px;
  background-color: #1f5baa;
  a {
    font-weight: bold;
    color: #0e273f;

    &.router-link-exact-active {
      color: #68a8d3;
    }
  }
}
#header {
  padding: 40px;
  text-align: left;
  background: #1f5baa;
  color: white;
  font-size: 30px;
}
#small {
  font-size: 25px;
}
</style>
