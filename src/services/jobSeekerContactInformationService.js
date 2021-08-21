import axios from "axios"
import { toast } from "react-toastify";

export default class JobSeekerContactInformationService{

    urlBase="http://localhost:8080/api/jobseekercontactinformations";

    getAllJobSeekerContactInformations(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add(about,githubAdress,jobSeekerId,linkedinAdress){

        return axios.post(`${this.urlBase}/add`, {
            about: about,
            githubAdress:githubAdress,
            jobSeeker:{
                id:jobSeekerId
            },
            linkedinAdress:linkedinAdress
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

    update({about,githubAdress,jobSeekerId,linkedinAdress}){

        return axios.put(`${this.urlBase}/update`, {
            about: about,
            githubAdress:githubAdress,
            jobSeeker:{
                id:jobSeekerId
            },
            linkedinAdress:linkedinAdress
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    delete({JobSeekerContactInformationId}){

        return axios.delete(`${this.urlBase}/delete`, {

            id:JobSeekerContactInformationId

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}