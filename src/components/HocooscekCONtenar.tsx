import React from 'react'
import {useSelector ,useDispatch } from 'react-redux' 
import { buyCek } from '../redux/cacke/cakeaction';



const HocooscekCONtenar = () => {
 const hookss =  useSelector((state:any) => state.cake.numbarOfCake)
 const disptch =  useDispatch()
  return (
    <div>
      <h1> for Hooxs numbr of cake - {hookss} </h1>
      <button onClick={() => disptch(buyCek())} >buy cake </button>
    </div>
  )
}

export default HocooscekCONtenar
