import axios from "axios"
import { toast } from "react-toastify";

export default class ProgramingLanguageService{

    urlBase="http://localhost:8080/api/programinglanguages";

    getAllProgramingLanguages(){
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