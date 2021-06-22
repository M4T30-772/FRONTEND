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

export { Service, knjige };
