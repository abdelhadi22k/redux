import {combineReducers} from 'redux';
import reducercake from "./cacke/cakareducer";
import reducerkrem from "./krem/kremreducer";
import reduceruser from './user/userReducer';

export const rootReduser = combineReducers({
    cake: reducercake,
    krem:reducerkrem,
    user:reduceruser
})