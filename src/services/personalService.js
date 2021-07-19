import axios from "axios"

export default class PersonalService{

    urlBase="http://localhost:8080/api/personals";

    getAllPersonals(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({firstName,lastName,email,password}){

        return axios.post(`${this.urlBase}/add`, {
            firstName: firstName,
            lastName:lastName,
            user:{
                email:email,
                password:password
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    update({firstName,lastName,email,password}){

        return axios.put(`${this.urlBase}/update`, {
            firstName: firstName,
            lastName:lastName,
            user:{
                email:email,
                password:password
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    delete({personalId}){

        return axios.delete(`${this.urlBase}/delete`, {
            
            id:personalId

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}