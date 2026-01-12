import React from 'react'
import './Buttons.css';
export default function Buttons({btn1Name,btn2Name}) {
  return (
    <div className="btngrp">
        <button>{btn1Name}</button>
        <button>{btn2Name}</button>
    </div>
  )
}
