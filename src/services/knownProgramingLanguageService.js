import axios from "axios"

export default class KnownProgramingLanguageService{

    urlBase="http://localhost:8080/api/knownlanguages";

    getAllKnownProgramingLanguages(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({jobSeekerId,programingLanguageId}){

        return axios.post(`${this.urlBase}/add`, {

            jobSeeker:{
                id:jobSeekerId
            },
            programingLanguageId:programingLanguageId

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    update({jobSeekerId,programingLanguageId}){

        return axios.put(`${this.urlBase}/update`, {

            jobSeeker:{
                id:jobSeekerId
            },
            programingLanguageId:programingLanguageId

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    delete({knownProgramingLanguageId}){

        return axios.delete(`${this.urlBase}/delete`, {
            id:knownProgramingLanguageId
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}