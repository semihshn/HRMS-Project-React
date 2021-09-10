import axios from "axios";
import { toast } from "react-toastify";

export default class AuthenticationService {
  urlBase = "http://localhost:8080/api/authentication";

  login(email, password) {
    return axios
      .get(`${this.urlBase}/login`, {
        params: { email: email, password: password },
      })
      .then(function (response) {
        //console.log(response);
        if (response.data.success) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
        return response
      })
      .catch(function (error) {
        console.log(error);
        toast.info("İstenmeyen bir hatayla karşılaşıldı");
      });
  }
}
