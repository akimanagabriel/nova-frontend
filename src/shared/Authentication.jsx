import axios from "axios";
import api from "../config/basicConfig";

var data = null;

const userAuthentication = {
  getAuth: async () => {
    await axios
      .get(api.offlineUrl + "/api/auth/getsession")
      .then((res) => {
        data = res.data;
      })
      .catch((err) => console.log(err));
    return data;
  },

  login: async (username, password) => {
    await axios
      .post(api.offlineUrl + "/api/auth/login", { username, password })
      .then((res) => {
        data = res.data.user;
      })
      .catch((err) => console.log(err));
    return data;
  },

  logout: () => {
    var user = null;
    axios
      .post(api.offlineUrl + "/api/auth/login", {
        username: "peter",
        password: "shardaq",
      })
      .then(({ data }) => {
        user = data;
      })
      .catch((err) => console.log(err));
    return user;
  },
};

export default userAuthentication;
