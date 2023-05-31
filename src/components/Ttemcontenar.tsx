import React from 'react'
import { buyCek } from '../redux/cacke/cakeaction';
import { connect } from 'react-redux'
import { buykrem } from './../redux/krem/actionkrim';




const Ttemcontenar = (props:any) => {
  return (
    <div>
      <h1>item {props.item}</h1>
      <button onClick={props.buyitem} >buy product</button>
    </div>
  )
}

const mapstate = (state:any , ownProps:any) =>{
    const itemState = ownProps.cake 
    ?state.cake.numbarOfCake 
    :state.krem.numbarOfkrem
    return {
        item: itemState
    }
  }
  
  const mapActction = (dispatch:any , ownProps:any) =>{
    const buyitem = ownProps.cake 
    ?() => dispatch(buyCek())
    :() => dispatch(buykrem())
    return {
      buyitem :  buyitem,
    }
  } 
  
  
  export default connect(mapstate,mapActction)(Ttemcontenar)
  
