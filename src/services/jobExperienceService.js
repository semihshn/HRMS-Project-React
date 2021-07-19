import axios from "axios"

export default class JobExperienceService{

    urlBase="http://localhost:8080/api/jobexperiences";

    getAllJobExperiences(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({companyName,experienceStartDate,experienceEndDate,jobId,jobSeekerId}){

        return axios.post(`${this.urlBase}/add`, {

            companyName: companyName,
            experienceStartDate:experienceStartDate,
            experienceEndDate:experienceEndDate,
            job:{id:jobId},
            jobSeeker:{id:jobSeekerId}

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        }

        update({companyName,experienceStartDate,experienceEndDate,jobId,jobSeekerId}){

          return axios.put(`${this.urlBase}/update`, {
  
              companyName: companyName,
              experienceStartDate:experienceStartDate,
              experienceEndDate:experienceEndDate,
              job:{id:jobId},
              jobSeeker:{id:jobSeekerId}
  
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
  
          }

          delete({jobExperienceId}){

            return axios.delete(`${this.urlBase}/delete`, {
    
              id:jobExperienceId
    
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
    
            }

    }