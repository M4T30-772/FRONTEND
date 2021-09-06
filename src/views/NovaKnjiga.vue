<template>
  <div class="a">
    <p class="sign" align="center">Unesite novu knjigu</p>
    <form class="form1">
      <input
        v-model="autor"
        class="un"
        type="text"
        align="center"
        placeholder="Autor"
      />
      <input
        v-model="naziv"
        class="pass"
        type="password"
        align="center"
        placeholder="Naziv knjige"
      />
      <input
        v-model="url"
        class="un"
        type="text"
        align="center"
        placeholder="URL"
      />
      <input
        v-model="desc"
        class="un"
        type="text"
        align="center"
        placeholder="Opis"
      />
      <input
        v-model="knjizevni_rod"
        class="un"
        type="text"
        align="center"
        placeholder="Književni rod"
      />
      <input
        v-model="datum"
        class="un"
        type="text"
        align="center"
        placeholder="Godina objavljivanja"
      />
      <a @click="postNovaKnjiga()" class="submit" type="button" align="center">
        Register
      </a>
    </form>
  </div>
</template>

<script>
import { NovaKnjiga } from "@/services";

export default {
  data() {
    return {
      autor: "",
      naziv: "",
      url: "",
      desc: "",
      knjizevni_rod: "",
      datum: "",
    };
  },
  methods: {},
  name: "NovaKnjiga",
  methods: {
    postNovaKnjiga() {
      let NovaKnjigaVue = {
        Autor: this.autor,
        Naziv: this.naziv,
        Url: this.url,
        Desc: this.desc,
        Knjizevni_Rod: this.knjizevni_rod,
        Datum: this.datum,
      };
      NovaKnjiga.create(NovaKnjigaVue).then(() => {
        this.$router.push({ name: "ListaKnjiga" });
      });
    },
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
  width: 400px;
  height: 400px;
  margin: 7em auto;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
}

.sign {
  padding-top: 40px;
  color: #8c55aa;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  font-size: 23px;
}

.un {
  width: 84%;
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
  width: 84%;
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

button {
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
