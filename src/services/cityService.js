import axios from "axios"
import { toast } from "react-toastify";

export default class CityService{

    urlBase="http://localhost:8080/api/cities";

    getAllCities(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add(cityName){

        return axios.post(`${this.urlBase}/add`, {
            name: cityName
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

    update(cityId,cityName){

      axios.put(`${this.urlBase}/update` , {
        id:cityId,
        name:cityName
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

    delete(cityId){

      axios.delete(`${this.urlBase}/delete` , {
        params:{cityId}
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

}