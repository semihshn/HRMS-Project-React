import axios from "axios"

export default class ProgramingLanguageService{

    urlBase="http://localhost:8080/api/programinglanguages";

    getAllProgramingLanguages(){
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

    delete({programingLanguageId}){

        return axios.delete(`${this.urlBase}/delete`, {
            
            id:programingLanguageId

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}