
import { BUY_CAKE } from "./actionType";

export  const buyCek = (num = 1) => {
    return{
        type: BUY_CAKE,
        payload: num
    };
};
