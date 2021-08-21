import axios from "axios";
import { toast } from "react-toastify";

export default class UserService {
  urlBase = "http://localhost:8080/api/users";

  getAllUsers() {
    return axios.get(`${this.urlBase}/getall`);
  }

  add( email, password ) {
    return axios
      .post(`${this.urlBase}/add`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        response.data.success?toast.success(response.data.message):toast.error(response.data.message)
      })
      .catch(function (error) {
        console.log(error);
        toast.info("İstenmeyen bir hatayla karşılaşıldı")
      });
  }

  update({ email, password }) {
    return axios
      .put(`${this.urlBase}/update`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  delete({ userId }) {
    return axios
      .delete(`${this.urlBase}/delete`, {
        id: userId
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
