import axios from "axios";
import $router from "@/router";
let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1500,
});
/*
Service.interceptors.request.use((request) => {
  let token = Auth.getToken();
  if (!token) {
    // $router.go();
    return;
  } else {
    request.headers["Authorization"] = "Bearer " + token;
  }
  return request;
});
Service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
      Auth.logout();
      //     $router.go();
    }
  }
);

mpakter@unipu.hr
*/
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

let Register = {
  async create(data) {
    let serverData = {
      username: data.username,
      password: data.password,
    };
    console.log("Spremam na backend", data);
    Service.post("/users", serverData);
    return;
  },
};

let Dashboard = {
  async create(data) {
    let serverData = {
      autor: data.autor,
      naziv: data.naziv,
      username: data.username,
      datum: Date.now(),
    };
    console.log("Spremam na backend", data);
    Service.post("/dashboard", serverData);
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
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  },
  logout() {
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    }
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
    get userEmail() {
      let user = Auth.getUser();
      if (user) {
        return user.username;
      }
    },
  },
};

export { Auth, NovaKnjiga, Dashboard, Register };
