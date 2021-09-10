import { applyMiddleware, createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const thunkMiddleware=require('redux-thunk').default;


export function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunkMiddleware));//, devToolsEnhancer()
}