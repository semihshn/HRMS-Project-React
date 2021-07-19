import axios from "axios"

export default class EmployerService{

    urlBase="http://localhost:8080/api/employers";

    getAllEmployers(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({companyName,telephone,email,password,webSite}){

        return axios.post(`${this.urlBase}/add`, {
          
            companyName: companyName,
            telephone:telephone,
            user:{
              email:email,
              password:password
            },
            webSite:webSite

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    update({companyName,telephone,email,password,webSite}){

      return axios.put(`${this.urlBase}/update`, {

          companyName: companyName,
          telephone:telephone,
          user:{
            email:email,
            password:password
          },
          webSite:webSite

        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

  }

  delete({employerId}){

    return axios.delete(`${this.urlBase}/delete`, {

        id:employerId

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}

}