import React from 'react'
import './Servicebox.css';
export default function Servicebox({sImg,sTitle,sDes}) {
  return (
    <div className="servicebox">
        <div className="serviceicon">
            <img src={sImg} alt="Service" />
        </div>
        <div className="servicecontents">
            <h3>{sTitle}</h3>
            <p>{sDes}</p>
            <a href="#">Read More <i class='bx  bx-arrow-right-stroke'></i> </a>
        </div>
    </div>
  )
}
