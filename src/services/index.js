import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

let knjige = {
  async getAll(searchTerm) {
    let response = await Service.get(`/knjige?naziv=${searchTerm}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        autor: doc.autor,
        naziv: doc.naziv,
      };
    });
    return data;
  },
};

let Auth = {
  async login(username, password) {
    let respone = await Service.post("/auth", {
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
    } else false;
  },
  state: {
    get authenticated() {
      return Auth.authenticated();
    },
  },
};

export { Service, knjige };
