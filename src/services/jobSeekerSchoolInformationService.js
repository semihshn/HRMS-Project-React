import axios from "axios"

export default class JobSeekerSchoolInformationService{

    urlBase="http://localhost:8080/api/jobseekerschoolinformations";

    getAllJobSeekerSchoolInformations(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({jobSeekerId,schoolId,schoolPartId,universityStartDate,universityGraduationDate}){

        return axios.post(`${this.urlBase}/add`, {

            jobSeeker:{
                id:jobSeekerId
            },
            school:{
                id:schoolId
            },
            schoolPart:{
                id:schoolPartId
            },
            universityStartDate:universityStartDate,
            universityGraduationDate:universityGraduationDate

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    update({jobSeekerId,schoolId,schoolPartId,universityStartDate,universityGraduationDate}){

        return axios.put(`${this.urlBase}/update`, {

            jobSeeker:{
                id:jobSeekerId
            },
            school:{
                id:schoolId
            },
            schoolPart:{
                id:schoolPartId
            },
            universityStartDate:universityStartDate,
            universityGraduationDate:universityGraduationDate
            
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    delete({jobSeekerSchoolInformationId}){

        return axios.delete(`${this.urlBase}/delete`, {

            id:jobSeekerSchoolInformationId
            
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

}