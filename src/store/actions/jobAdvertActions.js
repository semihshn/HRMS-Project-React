import axios from "axios";
import { toast } from "react-toastify";
const redux = require("redux");

export const GETALL_JOBADVERT_SUCCESS = "GETALL_JOBADVERT_SUCCESS";
export const GETALL_JOBADVERT_ERROR = "GETALL_JOBADVERT_ERROR";

export const GETALL_JOBADVERT_ISACTIVE_SUCCESS =
  "GETALL_JOBADVERT_ISACTIVE_SUCCESS";
export const GETALL_JOBADVERT_ISACTIVE_ERROR =
  "GETALL_JOBADVERT_ISACTIVE_ERROR";

export const ADD_JOBADVERT_SUCCESS = "ADD_JOBADVERT_SUCCESS";
export const ADD_JOBADVERT_ERROR = "ADD_JOBADVERT_ERROR";

const urlBase = "http://localhost:8080/api/jobadverts";

export const getAllJobAdvert = () => (dispatch) => {
  axios
    .get(`${urlBase}/getall`)
    .then((response) =>
      dispatch({ type: GETALL_JOBADVERT_SUCCESS, payload: response.data })
    )
    .catch((error) =>
      dispatch({ type: GETALL_JOBADVERT_ERROR, payload: error })
    );
};

export const getAllJobAdvertsByIsActive = (isActive) => (dispatch) => {
  axios
    .get(`${urlBase}/getByIsActive?isActive=${isActive}`)
    .then((response) =>
      dispatch({
        type: GETALL_JOBADVERT_ISACTIVE_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({ type: GETALL_JOBADVERT_ISACTIVE_ERROR, payload: error })
    );
};

export const add =
  (
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
  ) =>
  (dispatch) => {
    axios
      .post(`${urlBase}/add`, {
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
      .then((response) => {
        response.data.success
          ? toast.success(response.data.message)
          : toast.error(response.data.message);
        dispatch({ type: ADD_JOBADVERT_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        toast.info("İstenmeyen bir hatayla karşılaşıldı");
        dispatch({ type: ADD_JOBADVERT_ERROR, payload: error });
      });
  };
