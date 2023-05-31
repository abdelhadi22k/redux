import { createStore ,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReduser } from './rootReducer';
import logger from 'redux-logger'



export const store = createStore(
    rootReduser ,
    composeWithDevTools(applyMiddleware(logger, thunk))
    )