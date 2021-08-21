import axios from "axios"
import { toast } from "react-toastify";

export default class LanguageService{

    urlBase="http://localhost:8080/api/languages";

    getAllLanguages(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add(languageName){

        return axios.post(`${this.urlBase}/add`, {
            languageName: languageName
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

    update({languageName}){

        return axios.put(`${this.urlBase}/update`, {
            languageName: languageName
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    delete({languageId}){

        return axios.delete(`${this.urlBase}/delete`, {
            id: languageId
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}