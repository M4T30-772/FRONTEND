<template>
  <div class="main">
    <p class="sign" align="center">Unos knjiga</p>
    <form @submit.prevent="PostNewKnjiga" class="form1">
      <input
        v-model="newAutor"
        class="na"
        type="text"
        align="center"
        placeholder="Naziv Autora"
      />
      <input
        v-model="newNaziv"
        class="nk "
        type="text"
        align="center"
        placeholder="Naziv Knjige"
      />
      <input
        v-model="newUrl"
        class="kv "
        type="text"
        align="center"
        placeholder="URL"
      />
      <input
        v-model="newDesc"
        class="kv "
        type="text"
        align="center"
        placeholder="Opis"
      />
      <input
        v-model="newKnjizevni_Rod"
        class="kv "
        type="text"
        align="center"
        placeholder="Književna Vrsta"
      />
      <input
        v-model="newAutor"
        class="do"
        type="text"
        align="center"
        placeholder="Datum Objavljivanja"
      />
      <button type="submit" class="submit" align="center">Submit</button>
    </form>
  </div>
</template>
<script>
import store from "../views/store.js";
export default {
  data: function() {
    return {
      store,
      newAutor,
      newNaziv,
      newUrl,
      newDesc,
      newKnjizevni_Rod,
      newDatum,
    };
  },
  methods: {
    postNewKnjiga() {
      console.log("ok");
      const Autor = this.newAutor;
      const Naziv = this.newNaziv;
      const Url = this.newUrl;
      const Desc = this.newDesc;
      const Knjizevni_Rod = this.newKnjizevni_Rod;
      const Datum = this.newDatum;

      db.collection("posts")
        .add({
          Autor: Autor,
          Naziv: Naziv,
          Url: Url,
          Desc: Desc,
          Knjizevni_Rod: Knjizevni_Rod,
          Datum: Datum,
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.newAutor = "";
          this.newNaziv = "";
          this.newUrl = "";
          this.newDesc = "";
          this.newKnjizevni_Rod = "";
          this.newDatum = "";
        })
        .catch((e) => {
          console.error(e);
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
  width: 900px;
  height: 700px;
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

.nk {
  width: 90%;
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
.na {
  width: 90%;
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
.kv {
  width: 90%;
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
.do {
  width: 90%;
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
  margin-left: 44%;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  height: 100 px;
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
