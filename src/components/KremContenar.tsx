import React from 'react'
import { buykrem } from '../redux/krem/actionkrim'
import { connect } from 'react-redux'



const KremContenar = (props:any) => {
  return (
    <div>
     <h1> for react connect numbar of krem - {props.numbarOfkrem} </h1>
      <button onClick={props.buykrem} > buy a krem</button>
    </div>
  )
}
const mapstate = (state:any) =>{
    return {
        numbarOfkrem: state.krem.numbarOfkrem,
    }
  }
  
  const mapActction = (dispatch:any) =>{
    return {
        buykrem:  () => dispatch(buykrem())
    }
  } 

  export default connect(mapstate,mapActction)(KremContenar)

