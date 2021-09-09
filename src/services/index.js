import axios from "axios";
let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1500,
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
    Service.post("/knjige", serverData);
    return;
  },
};
let novaPosudba = {
  async create(data) {
    console.log("Spremam na backend"), data;
  },
};

let Auth = {
  async login(username, password) {
    let response = await Service.post("/auth", {
      username: username,
      password: password,
    });

    let user = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  },
  logout() {
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  authenticated() {
    let user = Auth.getUser();
    if (user && user.token) {
      return true;
    }
    return false;
  },
  state: {
    get authenticated() {
      return Auth.authenticated();
    },
  },
};

export { Auth, NovaKnjiga, novaPosudba };
