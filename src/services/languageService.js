import axios from "axios"

export default class LanguageService{

    urlBase="http://localhost:8080/api/languages";

    getAllLanguages(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({languageName}){

        return axios.post(`${this.urlBase}/add`, {
            languageName: languageName
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
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