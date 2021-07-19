import axios from "axios"

export default class SchoolService{

    urlBase="http://localhost:8080/api/schools";

    getAllSchools(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({schoolName}){

        return axios.post(`${this.urlBase}/add`, {

            schoolName: schoolName

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
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