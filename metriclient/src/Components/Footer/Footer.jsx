import React from 'react'
import "./Footer.css";
import Footerimg from '../../Assets/logo.webp';
export default function Footer() {
  return (
    <footer>
          <div className="footerbox">
              <img src={Footerimg} alt="footer img" />
              <div className="footerlinks">
                <h4>Conatct Links</h4>
                <ul>
                  <li><a href="#"><span><i class='bx  bx-phone'></i> </span> + 1 (045) - 224 - 12 - 67</a></li>
                  <li><a href="#"><span><i class='bx  bx-envelope-alt'></i>  </span> info@demolink.org</a></li>
                </ul>
              </div>
          </div>
           <div className="footerbox">
              <div className="footerlinks">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Web Design & Branding</a></li>
                  <li><a href="#">Graphic Design</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">Infographics</a></li>
                  <li><a href="#">SEO</a></li>
                </ul>
              </div>
          </div>
           <div className="footerbox">
              <div className="footerlinks">
                <h4>About company</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
              </div>
          </div>
          <div className="footerbox">
              <div className="footerlinks">
                <h4>Our social networks</h4>
                <p>Join us in the social networks to receive the latest news and updates.</p>
                <div className='socialicon'>
                    <div className="icons"><a href="#"><i class='bx  bx-phone'></i> </a></div>
                    <div className="icons"><a href="#"><i class='bx  bx-phone'></i> </a></div>
                    <div className="icons"><a href="#"><i class='bx  bx-phone'></i> </a></div>
                    <div className="icons"><a href="#"><i class='bx  bx-phone'></i> </a></div>
                </div>
              </div>
          </div>
    </footer>
  )
}
