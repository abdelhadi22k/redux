import React from 'react'
import { buyCek } from '../redux/cacke/cakeaction';
import { connect } from 'react-redux'



const CakeContener = (props:any) => {
  return (
    <div>
      <h1> for react connect numbar of cake - {props.numbarOfCake} </h1>
      <button onClick={props.buyCek} > buy a cake</button>
    </div>
  )
}

const mapstate = (state:any) =>{
  return {
    numbarOfCake: state.cake.numbarOfCake,
  }
}

const mapActction = (dispatch:any) =>{
  return {
    buyCek:  () => dispatch(buyCek())
  }
} 


export default connect(mapstate,mapActction)(CakeContener)
