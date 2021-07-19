import axios from "axios"

export default class JobAdvertService{

    urlBase="http://localhost:8080/api/jobadverts";

    getAllJobAdverts(){
        return axios.get(`${this.urlBase}/getall`)
    }

    getAllJobAdvertsSorted(){
        return axios.get(`${this.urlBase}/getallsorted`)
    }

    add({active,applicationDeadline,cityId,description,employerId,jobId,maxSalary,minSalary,
        numberOfOpenPosition}){

        return axios.post(`${this.urlBase}/add`, {
            active: active,
            applicationDeadline:applicationDeadline,
            city:{id:cityId},
            description:description,
            employer:{id:employerId},
            job:{id:jobId},
            maxSalary:maxSalary,
            minSalary:minSalary,
            numberOfOpenPosition:numberOfOpenPosition

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    update({active,applicationDeadline,cityId,description,employerId,jobId,maxSalary,minSalary,
      numberOfOpenPosition}){

      return axios.put(`${this.urlBase}/update`, {
          active: active,
          applicationDeadline:applicationDeadline,
          city:{id:cityId},
          description:description,
          employer:{id:employerId},
          job:{id:jobId},
          maxSalary:maxSalary,
          minSalary:minSalary,
          numberOfOpenPosition:numberOfOpenPosition

        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

  }

  delete({jobAdvertId}){

    return axios.delete(`${this.urlBase}/delete`, {

      id:jobAdvertId

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}

}