import React from 'react'
import './Hero.css';
import Hero from '../../Assets/homeimg1.png';
import Buttons from '../Buttons/Buttons';
export default function Herosection() {
  return (
    <section className='herosec'>
        <div className="heroleft">
            <h2>Our creativity is your <span className='ss'> success</span></h2>
            <p>We break all boundaries if they happen on our way of project’s development!</p>
            {/* <div className="btngrp">
                <button>Learn More</button>
                <button>Watch Demos <span><i class='bx  bx-fast-forward-circle'></i> </span></button>
            </div> */}
            <Buttons btn1Name={"Learn More"} btn2Name={"Watch Demos"}/>
        </div>
        <div className="heroright">
            <img src={Hero} alt="hero images" />
        </div>
    </section>
  )
}
