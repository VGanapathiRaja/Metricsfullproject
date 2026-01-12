import React from 'react'
import './Services.css';
import SerciveImg1 from '../../Assets/seriveimg.png';
import SerciveImg2 from '../../Assets/seriveimg1.png';
import Servicebox from '../Servicebox/Servicebox';
export default function Servicessection() {
  return (
    <section className='servicesec'>
        <div className="heading">
            <h1>We provide a wide range
            of <span>creative services</span></h1>
        </div>
        <div className="serviceboxes">
            <Servicebox sImg={SerciveImg1} sTitle="Web Design & Branding " sDes="A great brand combines design and messaging to evoke emotion in your customers and drive strategy.read more" />

            <Servicebox sImg={SerciveImg2} sTitle="Web Design & Branding " sDes="A great brand combines design and messaging to evoke emotion in your customers and drive strategy.read more" />

            <Servicebox sImg={SerciveImg2} sTitle="Web Design & Branding " sDes="A great brand combines design and messaging to evoke emotion in your customers and drive strategy.read more" />




            {/* <div className="servicebox">
                <div className="serviceicon">
                    <img src={SerciveImg1} alt="Service" />
                </div>
                <div className="servicecontents">
                    <h3>Web Design & Branding</h3>
                    <p>A great brand combines design and messaging to evoke emotion in your customers and drive strategy.read more</p>
                    <a href="#">Read More <i class='bx  bx-arrow-right-stroke'></i> </a>
                </div>
            </div>
            <div className="servicebox">
                <div className="serviceicon">
                    <img src={SerciveImg1} alt="Service" />
                </div>
                <div className="servicecontents">
                    <h3>Web Design & Branding</h3>
                    <p>A great brand combines design and messaging to evoke emotion in your customers and drive strategy.read more</p>
                    <a href="#">Read More <i class='bx  bx-arrow-right-stroke'></i> </a>
                </div>
            </div> */}
        </div>
        <div className="serviceboxes">
            <Servicebox sImg={SerciveImg1} sTitle="Web Design & Branding " sDes="A great brand combines design and messaging to evoke emotion in your customers and drive strategy.read more" />

            <Servicebox sImg={SerciveImg2} sTitle="Web Design & Branding " sDes="A great brand combines design and messaging to evoke emotion in your customers and drive strategy.read more" />

            <Servicebox sImg={SerciveImg2} sTitle="Web Design & Branding " sDes="A great brand combines design and messaging to evoke emotion in your customers and drive strategy.read more" />
        </div>
    </section>
  )
}
