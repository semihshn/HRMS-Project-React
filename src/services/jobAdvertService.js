import axios from "axios";
import { toast } from "react-toastify";

export default class JobAdvertService {
  urlBase = "http://localhost:8080/api/jobadverts";

  getAllJobAdverts() {
    return axios.get(`${this.urlBase}/getall`);
  }

  getAllJobAdvertsByIsActive(isActive) {
    return axios.get(`${this.urlBase}/getByIsActive?isActive=${isActive}`);
  }

  getAllJobAdvertsSorted() {
    return axios.get(`${this.urlBase}/getallsorted`);
  }

  add(
    applicationDeadline,
    cityId,
    description,
    employerId,
    jobId,
    maxSalary,
    minSalary,
    numberOfOpenPosition,
    workingType,
    workingTimeType
  ) {
    return axios
      .post(`${this.urlBase}/add`, {
        applicationDeadline: applicationDeadline,
        city: { id: cityId },
        description: description,
        employer: { id: employerId },
        job: { id: jobId },
        maxSalary: maxSalary,
        minSalary: minSalary,
        numberOfOpenPosition: numberOfOpenPosition,
        workingType: workingType,
        workingTimeType: workingTimeType,
      })
      .then(function (response) {
        console.log(response);
        response.data.success
          ? toast.success(response.data.message)
          : toast.error(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
        toast.info("İstenmeyen bir hatayla karşılaşıldı");
      });
  }

  update(
    active,
    applicationDeadline,
    cityId,
    description,
    employerId,
    jobId,
    maxSalary,
    minSalary,
    numberOfOpenPosition
  ) {
    return axios
      .put(`${this.urlBase}/update`, {
        active: active,
        applicationDeadline: applicationDeadline,
        city: { id: cityId },
        description: description,
        employer: { id: employerId },
        job: { id: jobId },
        maxSalary: maxSalary,
        minSalary: minSalary,
        numberOfOpenPosition: numberOfOpenPosition,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  delete(jobAdvertId) {
    //console.log)
    return axios
      .delete(`${this.urlBase}/delete`, {
        params: { jobAdvertId },
      })
      .then(function (response) {
        console.log(response);
        response.data.success
          ? toast.success(response.data.message)
          : toast.error(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
        toast.info("İstenmeyen bir hatayla karşılaşıldı");
      });
  }

  updateToIsActive(advert) {
    return axios
      .put(`${this.urlBase}/update`, advert)
      .then(function (response) {
        console.log(response);
        response.data.success
          ? toast.success(response.data.message)
          : toast.error(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
        toast.info("İstenmeyen bir hatayla karşılaşıldı");
      });
  }
}
