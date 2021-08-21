import axios from "axios"
import { toast } from "react-toastify";

export default class ImageService{

    urlBase="http://localhost:8080/api/images";

    getAllImages(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add(imageFile,jobseekerId){

        const data = new FormData();
        data.append("file", imageFile);

        return axios.post(`${this.urlBase}/add`, {imageFile:data} , {
            headers: { "Content-Type": "multipart/form-data" },
            params: { jobseekerId }
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

    update({imageFile,jobseekerId}){

      const data = new FormData();
      data.append("file", imageFile);

      return axios.put(`${this.urlBase}/update`, {imageFile:data} , {
          headers: { "Content-Type": "multipart/form-data" },
          params: { jobseekerId }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

  }

  delete({imageId}){

    return axios.delete(`${this.urlBase}/delete`, {

        id:imageId
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}

}