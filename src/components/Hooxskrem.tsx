import React from 'react'
import {useSelector ,useDispatch } from 'react-redux' 
import { buykrem } from '../redux/krem/actionkrim'



const Hooxskrem = () => {
 const hookss =  useSelector((state:any) => state.krem.numbarOfkrem)
 const disptch =  useDispatch()
  return (
    <div>
      <h1> for Hooxs numbr of krem - {hookss} </h1>
      <button onClick={() => disptch(buykrem())} >buy krem </button>
    </div>
  )
}

export default Hooxskrem
