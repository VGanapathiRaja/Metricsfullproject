import React from 'react'
import './Passion.css';
import Buttons from '../Buttons/Buttons';
import Passionimg from '../../Assets/homeimg2.png';
export default function Passionsection() {
  return (
    <section className='passionsec'>
        <div className="heroright">
            <img src={Passionimg} alt="hero images" />
        </div>
        <div className="heroleft">
            <h2>Creative challenges are our <span className='ss'>passion</span></h2>
            <p>Our designers and developers work closely together to build a creative and positive working environment. Functionality is as important to us as aesthetics.!</p>
            <Buttons btn1Name={"Read More"} btn2Name={"Contact Us"}/>
        </div>
    </section>
  )
}
