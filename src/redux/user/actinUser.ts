import { FETCH_USERS_REQUEST ,FETCH_USERS_SUCCESS ,FETCH_USERS_FAILURE} from './actionType';
import axios from 'axios';



export const fitchUserr = () => {
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  export const fitchUsers = (users:any) => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users,
    }
  }
  export const fitchUserf = (error:any) => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error,
    }
  }

  export const  fetchUser = () => {
    return (dispatch:any) => {
        dispatch(fitchUserr())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          const users = res.data
          dispatch(fitchUsers(users))
        }).catch((error) =>{
            const eroorr = error.message
          dispatch(fitchUserf(eroorr))

        })
    }
  }