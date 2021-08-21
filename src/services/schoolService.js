import axios from "axios"
import { toast } from "react-toastify";

export default class SchoolService{

    urlBase="http://localhost:8080/api/schools";

    getAllSchools(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add(schoolName){

        return axios.post(`${this.urlBase}/add`, {

            schoolName: schoolName

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

    update({schoolName}){

        return axios.put(`${this.urlBase}/update`, {

            schoolName: schoolName

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    delete({schoolId}){

        return axios.delete(`${this.urlBase}/delete`, {
            
            id:schoolId

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}