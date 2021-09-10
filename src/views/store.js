import { Auth } from "@/services";
export default {
  searchTerm: "",
  currentUser: null,
  cards: [],
  authenticated: false,
  autor: "",
  naziv: "",
  username: "",
  pdf: "",
  data() {
    return {
      Auth: Auth.state,
    };
  },
};
