import axios from "axios"

export default class JobService{

    urlBase="http://localhost:8080/api/jobs";

    getAllJobs(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({jobName}){

        return axios.post(`${this.urlBase}/add`, {
            jobName: jobName
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    update({jobName}){

        return axios.put(`${this.urlBase}/update`, {
            jobName: jobName
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    delete({jobId}){

        return axios.delete(`${this.urlBase}/delete`, {
            id:jobId
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}