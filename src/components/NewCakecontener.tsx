import React,{useState} from 'react'
import { buyCek } from '../redux/cacke/cakeaction';
import { connect } from 'react-redux'



const NewCakecontener = (props:any) => {
    const [num , setnum] = useState('')
  return (
    <div>
      <h1> for react connect numbar of cake - {props.numbarOfCake} </h1>
      <input type="text" value={num} onChange={(e) => setnum(e.target.value)} />
      <button onClick={() => props.buyCek(num)} > buy {num} cake</button>
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
    buyCek:  (num:any) => dispatch(buyCek(num))
  }
} 


export default connect(mapstate,mapActction)(NewCakecontener)
