import axios from "axios"

export default class CityService{

    urlBase="http://localhost:8080/api/cities";

    getAllCities(){
        return axios.get(`${this.urlBase}/getall`)
    }

    add({cityName}){

        return axios.post(`${this.urlBase}/add`, {
            name: cityName
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    update({cityId,cityName}){

      axios.put(`${this.urlBase}/update` , {
        id:cityId,
        name:cityName
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    delete({cityId}){

      axios.delete(`${this.urlBase}/delete` , {
        id:cityId
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }

}