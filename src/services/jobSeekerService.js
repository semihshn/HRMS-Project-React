import axios from "axios"
import { toast } from "react-toastify";

export default class JobSeekerService{

    urlBase="http://localhost:8080/api/jobseekers";

    getAllJobSeekers(){
        return axios.get(`${this.urlBase}/getall`)
    }

    getAllJobSeekersCv(){
        return axios.get(`${this.urlBase}/getAllCv`)
    }

    add(firstName,lastName,nationalityId,email,password,yearOfBirth,jobId){

        return axios.post(`${this.urlBase}/add`, {

            firstName: firstName,
            job:{
                id:jobId
            },
            lastName:lastName,
            nationalityId:nationalityId,
            user:{
                email:email,
                password:password
            },
            yearOfBirth:yearOfBirth

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

        update({firstName,lastName,nationalityId,email,password,yearOfBirth,jobId}){

            return axios.put(`${this.urlBase}/update`, {
    
                firstName: firstName,
                job:{
                    id:jobId
                },
                lastName:lastName,
                nationalityId:nationalityId,
                user:{
                    email:email,
                    password:password
                },
                yearOfBirth:yearOfBirth
    
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
    
            }

            delete({jobSeekerId}){

                return axios.delete(`${this.urlBase}/delete`, {
        
                    id:jobSeekerId
        
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
        
                }

}