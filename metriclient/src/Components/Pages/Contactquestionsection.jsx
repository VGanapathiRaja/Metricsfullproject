import React from 'react'
import './Contactquestion.css';
import Buttons from '../Buttons/Buttons';
import ContactqueImg  from '../../Assets/homeimg3.png';
export default function Contactquestionsection() {
  return (
    <section className='contactquessec'>
        <div className="heroleft">
            <h2>If you have any questions, please <span className='ss'> contact us</span></h2>
            <p>Our professional support team try to do their best to provide you with high-quality consultations concerning any questions about our services.</p>
            <Buttons btn1Name={"Learn More"} btn2Name={"Get In Touch"}/>
        </div>
        <div className="heroright">
            <img src={ContactqueImg} alt="hero images" />
        </div>
    </section>
  )
}
