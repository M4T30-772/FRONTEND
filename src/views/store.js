import { Auth } from "@/services";
export default {
  searchTerm: "",
  currentUser: null,
  cards: [],
  authenticated: false,
  autor: "",
  naziv: "",
  username: "",
  data() {
    return {
      Auth: Auth.state,
    };
  },
};
