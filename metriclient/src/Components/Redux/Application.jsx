import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { apply, applydrop } from './applySlice'
export default function Application() {
    const myApplication = useSelector((state)=> state.apply.data)
    const dispatch = useDispatch()
  return (
    <div>Application

        <h1>{myApplication}</h1>

        <button onClick={()=> dispatch(apply())} >apply</button>
        <button onClick={()=> dispatch(applydrop())} >apply drop</button>
    </div>


  )
}
