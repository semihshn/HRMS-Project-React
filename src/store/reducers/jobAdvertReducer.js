
import { ADD_JOBADVERT_ERROR, ADD_JOBADVERT_SUCCESS, GETALL_JOBADVERT_ISACTIVE_ERROR, GETALL_JOBADVERT_ISACTIVE_SUCCESS, GETALL_JOBADVERT_SUCCESS } from "../actions/jobAdvertActions";
import { GETALL_JOBADVERT_ERROR } from "../actions/jobAdvertActions";
import { jobAdverts } from "../initialValues/jobAdvertInitialValues";
import { message } from "../initialValues/jobAdvertInitialValues";

const initialState = {jobAdverts,message};

export default function jobAdvertReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GETALL_JOBADVERT_SUCCESS:
            return {...state,jobAdverts:payload};
        case GETALL_JOBADVERT_ERROR:
            return {...state,message:payload};
        case GETALL_JOBADVERT_ISACTIVE_SUCCESS:
            return {...state,jobAdverts:payload};
        case GETALL_JOBADVERT_ISACTIVE_ERROR:
            return {...state,message:payload};
        case ADD_JOBADVERT_SUCCESS:
            return {...state,message:payload};
        case ADD_JOBADVERT_ERROR:
            return {...state,message:payload};
        
        default: 
            return state;
    }
}