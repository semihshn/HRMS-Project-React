import axios from "axios"
import { toast } from "react-toastify";

export default class SchoolPartService{

    urlBase="http://localhost:8080/api/schoolparts";

    getAllSchoolParts(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add(schoolPartName){

        return axios.post(`${this.urlBase}/add`, {

            schoolPartName: schoolPartName

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

    update({schoolPartName}){

        return axios.put(`${this.urlBase}/update`, {

            schoolPartName: schoolPartName

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    delete({schoolPartId}){

        return axios.delete(`${this.urlBase}/delete`, {
            
            id:schoolPartId

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}