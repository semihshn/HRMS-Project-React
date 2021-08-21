import axios from "axios"
import { toast } from "react-toastify";

export default class KnownLanguageService{

    urlBase="http://localhost:8080/api/knownlanguages";

    getAllKnownLanguages(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add(jobSeekerId,languageId,level){

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
            response.data.success?toast.success(response.data.message):toast.error(response.data.message)
          })
          .catch(function (error) {
            console.log(error);
            toast.info("İstenmeyen bir hatayla karşılaşıldı")
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