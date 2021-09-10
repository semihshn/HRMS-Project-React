import { combineReducers } from "redux";
import authenticateReducer from "./reducers/authenticateReducer";
import jobAdvertReducer from "./reducers/jobAdvertReducer";

const rootReducer = combineReducers({

    isAuthenticate: authenticateReducer,
    jobAdverts: jobAdvertReducer,

})

export default rootReducer;