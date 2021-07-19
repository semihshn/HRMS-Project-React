import axios from "axios"

export default class SchoolPartService{

    urlBase="http://localhost:8080/api/schoolparts";

    getAllSchoolParts(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({schoolPartName}){

        return axios.post(`${this.urlBase}/add`, {

            schoolPartName: schoolPartName

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
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