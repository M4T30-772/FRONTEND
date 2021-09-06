import axios from "axios";
let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

let NovaKnjiga = {
  async create(data) {
    let serverData = {
      Autor: data.Autor,
      Naziv: data.Naziv,
      Url: data.Url,
      Desc: data.Desc,
      Knjizevni_Rod: data.Knjizevni_Rod,
      Datum: data.Datum,
    };

    console.log("Spremam na backend", data);
    Service.post("/knjige1", serverData);
    return;
  },
};

let Auth = {
  async login(username, password) {
    let response = await Service.post("/auth", {
      username: username,
      password: password,
    });
    let user = response.data;
    localStorage.setItem("user", user);
    return true;
  },
};

export { Auth, NovaKnjiga };
