import { BUY_CAKE } from "./actionType";

const intialState = {
    numbarOfCake: 100 ,
}

const reducercake = (state = intialState , actin:any) => {
    switch(actin.type){
        case BUY_CAKE:
            return {
                numbarOfCake: state.numbarOfCake - actin.payload,
            }
            default:
                return state
    }
}
export default reducercake