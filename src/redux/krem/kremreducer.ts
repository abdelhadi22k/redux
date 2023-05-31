import { BUY_KREM } from "./actionType";

const intialState = {
    numbarOfkrem: 30 ,
}

const reducerkrem = (state = intialState , actin:any) => {
    switch(actin.type){
        case BUY_KREM:
            return {
                numbarOfkrem: state.numbarOfkrem -1,
            }
            default:
                return state
    }
}
export default reducerkrem ;