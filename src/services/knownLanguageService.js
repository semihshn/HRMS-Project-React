import axios from "axios"

export default class KnownLanguageService{

    urlBase="http://localhost:8080/api/knownlanguages";

    getAllKnownLanguages(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({jobSeekerId,languageId,level}){

        return axios.post(`${this.urlBase}/add`, {

            jobSeeker:{
                id:jobSeekerId
            },
            language:{
                id:languageId
            },
            level:level

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    update({jobSeekerId,languageId,level}){

        return axios.put(`${this.urlBase}/update`, {
            
            jobSeeker:{
                id:jobSeekerId
            },
            language:{
                id:languageId
            },
            level:level

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    delete({knownLanguageId}){

        return axios.delete(`${this.urlBase}/delete`, {
            id:knownLanguageId
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}